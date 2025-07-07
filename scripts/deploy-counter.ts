import "@nomicfoundation/hardhat-ethers";

import { ethers } from "hardhat";

async function deploy() {
  // We get the contract to deploy
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.waitForDeployment();
  return counter;
}

async function count(counter: any) {
  console.log("Counter value:", await counter.increment());
}

deploy().then(count);
