// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract NewLogic is Initializable {
    uint256 public value;

    function initialize(uint256 _value) initializer public{
    }

    function addTwo() external {
        value += 2;
    }

    function decreament() external {
        value -= 1;
    }
}