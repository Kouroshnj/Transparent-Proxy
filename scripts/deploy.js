const {ethers} = require("hardhat")

const main = async () => {
    const [signer, addr1] = await ethers.getSigners();

    const logicInterface = new ethers.Interface(["function initialize (uint256)"])
    const encodeFunction = logicInterface.encodeFunctionData("initialize", [100])
  
    // Step 1: Deploy MyLogic contract first
    const MyLogic = await ethers.getContractFactory("MyLogic");
    const myLogic = await MyLogic.deploy();
    const myLogicAddress = await myLogic.getAddress()
  
  
    // Step 2: Deploy the Proxy contract
    const MyTransparentProxy = await ethers.getContractFactory("MyTransparentProxy");
    const proxy = await MyTransparentProxy.deploy(myLogicAddress, signer.address, encodeFunction);
    const receipt = await proxy.deploymentTransaction().wait();

    let previousAdminContract;
    let newAdminContract;

    receipt.logs.find((log) => {
      if(log.eventName == 'AdminChanged') {
        previousAdminContract = log.args[0];
        newAdminContract = log.args[1];
        console.log(newAdminContract);
        
      } // emit the "AdminChanged" event and store "proxyAdmin" address contract
    })
    const myLogicProxyAddress = await proxy.getAddress();
  
    // Step 3: Interact with the Proxy
    const MyLogicProxy = await ethers.getContractAt("MyLogic", myLogicProxyAddress);
    console.log(await MyLogicProxy.value())
    console.log("Previous value:", await MyLogicProxy.value());
    await MyLogicProxy.addTwo();
    console.log("New value:", await MyLogicProxy.value());
    return {
      myLogicProxyAddress,
      newAdminContract,
    }
  };

module.exports = main  