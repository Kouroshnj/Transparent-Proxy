const {ethers} = require("hardhat")
const main = require("./deploy")

const upgradeContractLogic = async () => {
    const [signer, addr1] = await ethers.getSigners();
    
    const {myLogicProxyAddress, newAdminContract} = await main()
    const NewLogic = await ethers.getContractFactory("NewLogic");
    const newLogic = await NewLogic.deploy();
    const newLogicAddress = await newLogic.getAddress()

    const proxyAdminContract = await ethers.getContractAt("ProxyAdmin", newAdminContract)
    await proxyAdminContract.connect(signer).upgradeAndCall(myLogicProxyAddress, newLogicAddress, "0x");
    console.log("upgraded to new logic contract!")
  
    // Connect to the proxy contract
    const MyLogicProxy = await ethers.getContractAt("NewLogic", myLogicProxyAddress);

    await MyLogicProxy.connect(addr1).decreament()
    console.log(await MyLogicProxy.value())
  };
  
  upgradeContractLogic();
  
  
  