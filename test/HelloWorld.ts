

import "@nomicfoundation/hardhat-ethers"
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {

  //setup 
  //import contract
  //test action 
  it("Should say hello", async function () {
    const HW = await ethers.getContractFactory("HelloWorld");
    const hw = await HW.deploy();
    await hw.waitForDeployment();

    expect(await hw.Hello()).to.equal("Hello, World!");

  });
});