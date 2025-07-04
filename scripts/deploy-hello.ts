
import "@nomicfoundation/hardhat-ethers"

import { ethers } from "hardhat";

async function deploy() {
  // We get the contract to deploy
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.waitForDeployment();

  console.log("HelloWorld deployed to:", await helloWorld.getAddress());
  return helloWorld
}

async function sayHello(hello:any) {
    console.log("Say Hello:", await hello.Hello());

}

deploy().then(sayHello);