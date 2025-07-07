pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract Counter {
    uint256 public counter;
    function increment() public returns (uint256) {
        counter++;
        console.log("Counter incremented to: %s", counter);
        return counter;
    }
}
