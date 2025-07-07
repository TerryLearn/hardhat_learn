import { ethers } from "ethers";

function getEth() {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error(
      "Ethereum provider not found. Please install MetaMask or another Ethereum wallet."
    );
  }
  return eth;
}

async function requestAccess() {
  const eth = getEth();
  const result = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];
  return result && result.length > 0;
}

async function hasSigner() {
  const metamask = getEth();
  const signers = await metamask.request({
    method: "eth_accounts",
  });
  return signers && signers.length > 0;
}
async function getContract() {
  //1 合约地址
  //2 合约ABI
  //3 provider
  //4 signer

  if (!(await hasSigner()) && !(await requestAccess())) {
    throw new Error("no others ethsnums found.");
  }
  const provider = new ethers.BrowserProvider(getEth());
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    [
      "function increment() public",
      "function getCounter() public view returns (uint256)",
    ],
    provider
  );
  // document.body.innerHTML = await contract.Hello();

  const counter = document.createElement("div");
  async function getCounter() {
    counter.innerHTML = await contract.getCounter();
  }
  getCounter();
  async function setCount() {
    await contract.increment();
  }

  const button = document.createElement("button");
  button.innerHTML = "Increment Counter";
  button.onclick = async () => {
    await setCount();
    getCounter();
  };

  document.body.appendChild(counter);
  document.body.appendChild(button);
}

async function main() {
  await getContract();
}

main();
