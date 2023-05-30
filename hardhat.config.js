/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

const ALCHEMY_API_KEY1 = "1Uzhe_TZ-uIivcCFQ-ApGaxCf-n22t1c";
const ALCHEMY_API_KEY2 = "jJssohj6nxKAETup62rl8F40HjRNB9aT";

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY1}`,
      accounts: ["48ad06bd2cd912b5db5f0a3bf5073bdd44a5e1da464da32cb912c4ad14f3cb18",]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY2}`,
      accounts: ["48ad06bd2cd912b5db5f0a3bf5073bdd44a5e1da464da32cb912c4ad14f3cb18",]
    },

  }
};