#!/usr/bin/env node

// Limit event listeners to prevent memory leaks
require('events').EventEmitter.setMaxListeners(20);

// Load env vars and Ethers.js
require('dotenv').config();
const { ethers } = require('ethers');

// Initialize Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_API_ENDPOINT
);

// Define the DAI Smart Contract's ABI
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',
];

// Define the DAI Contract's address
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

// Instantiate a new Ethers contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

// Main app logic holding basic read function definitions
const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  // Print the DAI Contract's name, symbol, and total supply.
  console.log(
    `\n\x1b[1m\x1b[36mReading from \x1b[33m${address}\x1b[0m\x1b[36m:\x1b[0m`
  );
  console.log(`\n\x1b[32m  Name: \x1b[37m${name}\x1b[0m`);
  console.log(`\x1b[32m  Symbol: \x1b[37m${symbol}\x1b[0m`);
  console.log(`\x1b[32m  Total Supply: \x1b[37m${totalSupply}\x1b[0m\n`);

  // Retrieve the balance of a smart contract.
  const balance = await contract.balanceOf(
    '0x6c6Bc977E13Df9b0de53b251522280BB72383700'
  );
  const balanceInEther = ethers.utils.formatEther(balance);

  // Print the balance in their unit format
  console.log(
    `\x1b[1m\x1b[36mBalance in WEI:\x1b[0m \x1b[37m${balance}\x1b[0m`
  );
  console.log(
    `\x1b[1m\x1b[36mBalance in ETH:\x1b[0m \x1b[37m${balanceInEther}\x1b[0m\n`
  );
};

main();
