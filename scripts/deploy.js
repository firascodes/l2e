const { ethers } = require("hardhat");

async function deployAndWriteData() {
  // Get the deployment parameters from the Hardhat config file
  const [deployer] = await ethers.getSigners();
  const network = await ethers.provider.getNetwork();
  const { chainId } = network;
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Compile and deploy the smart contract
  const Contract = await ethers.getContractFactory("Learn2Earn");
  const contract = await Contract.deploy();

  // Wait for the contract to be mined and get the deployed contract instance
  await contract.deployed();
  console.log("Contract deployed at address:", contract.address);

  // Write course and student details to the contract
  for (let i = 1; i < 4; i++) {
    const pricePerShare = 1 * i;
    const totalShares = 1000 * i;
    const createCourseTx = await contract.createCourse(pricePerShare, totalShares);
    await createCourseTx.wait();
  
    const totalCourses = await contract.totalCourses();
  
    console.log("Course ID:", totalCourses.toString());
  }
  

  // const studentAddress = '0x123456789...'; // Replace with the actual student address
  // const shares = 10;
  // await contract.buyCourseFromStudent(studentAddress, courseId, shares);

  console.log("Data written to the contract successfully!");
}

deployAndWriteData().catch((error) => {
  console.error("Error:", error);
});
