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
 
 Scope
    public：所有人可调用
    private：只有合约可以调用
    internal：合约和子合约可以调用
    external：只有外部可以调用（private public，很少用其实）


 */
contract Counter {
    uint256 public counter;

    event CounterInc(uint256 counter);

    function increment() public {
        counter++;
        console.log("Counter incremented to: %s", counter);
        emit CounterInc(counter);
    }

    function getCounter() public view returns (uint256) {
        console.log("Counter value is: %s", counter);
        return counter;
    }
}
