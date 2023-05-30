import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "../App.css";
import contractABI from "../contractABI"; // Import the ABI from the file
import Details from "./Details";

function Courses() {
  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // rest of your code
  } else {
    console.log("Please install MetaMask!");
  }

  const contractAddress = "0x905c8247fe98eD9Bbd66C443968998210EF38C20"; // replace with your contract address
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  //States

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      if (!provider) return;

      const totalCourses = await contract.totalCourses();
      const courses = [];

      for (let i = 1; i <= totalCourses; i++) {
        const course = await contract.courses(i);
        courses.push(course);
      }
      setCourses(courses);
    }
    fetchCourses();
  }, []);

  const handleBuy = async (courseId) => {
    try {
      console.log("buying...");
      const course = courses.find((course) => course.courseId === courseId);
      const price = course.pricePerShare;

      // Check if MetaMask is connected
      if (!window.ethereum || !window.ethereum.selectedAddress) {
        throw new Error("Please connect MetaMask");
      }

      //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      //   console.log(accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);

      let transaction = await contractWithSigner.buyCourse(courseId, 1, {
        value: price,
      });
      await transaction.wait();

      console.log("Buy successful!");
    } catch (error) {
      console.error("Buy failed:", error);
    }
  };

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="container mx-auto py-20 text-center flex flex-col ">
      <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
      <div className="flex flex-row flex-wrap justify-evenly">
        {courses.map((course) => (
          <div
            key={course.courseId}
            className= "bg-violet-400 rounded-xl px-4 py-6 my-4 mx-3"
          >
            <h3 className="text-xl mb-2">
              Course {course.courseId.toString()}
            </h3>
            <div className="flex justify-center">
              <img
                src="https://th.bing.com/th/id/OIG.8.F9H.6sRC69WxEQNpRk?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                alt={`Course ${course.courseId}`}
                className="course-image"
                align
              />{" "}
            </div>
            <p>Price: {course.pricePerShare.toString()} wei</p>
            <p>Total shares: {course.totalShares.toString()}</p>
            <button
              onClick={() => handleBuy(course.courseId, 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Buy 1 Share
            </button>
            <button
              onClick={() => handleViewDetails(course)}
              className="bg-[#2dcddfa2] hover:bg-[#2dcddf] text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {/* Popup Card */}
      {selectedCourse && (
        <div className="modal ">
          <div className="modal-content bg-violet-300">
            <button
              className="close-button text-left ml-5 mt-5"
              onClick={handleCloseDetails}
            >
            <i class="fa-solid fa-square-xmark fa-2xl"></i>
            </button>
            <Details course={selectedCourse} handleBuy={handleBuy} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
