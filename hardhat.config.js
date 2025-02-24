require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  defaultNetwork: "localhost",
  networks: {
    sepolia: {
      url: "wss://ethereum-sepolia-rpc.publicnode.com",
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};
