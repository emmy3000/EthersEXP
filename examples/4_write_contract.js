#!/usr/bin/env node

// Prevent memory leaks
require('events').EventEmitter.setMaxListeners(20);

// Load environment variables and Ethers.js
require('dotenv').config();
const { ethers } = require('ethers');

// Initialize Testnet JSON-RPC provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_TESTNET_API_ENDPOINT
);

// Define sender and recipient accounts
const senderAccount = '0x8B78368464b516b93F6cB331B4515dB509aF6D06';
const recipientAccount = '0x0D2a409602031Ff5843e3ed4C39a4ce98295E071';

// Define the sender's private key
const privateKey = process.env.WALLET_PRIVATE_KEY;

// Create Wallet instance with private key and provider
const wallet = new ethers.Wallet(privateKey, provider);

// Define the Chainlink smart contract's ABI object.
const ERC20_ABI = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount) returns (bool)',
];

// Define the Chainlink Token address
const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

// Define an instance of the Chainlink smart contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

// Main app logic
const main = async () => {};

main();
