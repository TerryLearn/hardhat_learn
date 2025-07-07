pragma solidity ^0.8.28;

import "hardhat/console.sol";

/**
view & pure
    在这两种方法中，你只能获取data，不能修改任何内部状态
    no gas
    no tx
    readonly

ReadOnly 只读方法
    view方法，不改变合约状态的方法
    pure方法，不能【读、写】合约上状态的方法（纯函数）
 */
contract Counter {
    uint256 public counter;
    function increment() public {
        counter++;
        console.log("Counter incremented to: %s", counter);
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
