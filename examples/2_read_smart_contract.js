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

// DAI Smart Contract's ABI
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

// Define the DAI Contract's address
const address = '0x4754B849DC5164C4e09f5dE6639077438A94d205';

// Instantiate a new Ethers contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

// Main app logic
const main = async () => {

};

// Run main function
main();
