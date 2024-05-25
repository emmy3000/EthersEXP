#!/usr/bin/env node

// Limit event listeners to prevent memory leaks
require('events').EventEmitter.setMaxListeners(20);

// Load env vars and Ethers.js
require('dotenv').config();
const { ethers } = require('ethers');

// Initialize the Testnet JSON-RPC provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_TESTNET_API_ENDPOINT
);

// Define the sender account
const accountA = '0x8B78368464b516b93F6cB331B4515dB509aF6D06';

// Define the recipient account
const accountB = '0x455E5AA18469bC6ccEF49594645666C587A3a71B';

// Define the sender's private key
const privateKey = process.env.WALLET_PRIVATE_KEY;

// Create a Wallet instance with the private key and a provider
const wallet = new ethers.Wallet(privateKey, provider);

// Main app logic
const main = async () => {
  // Send 0.025 Ether to accountB (ETH --> WEI)
  const tx = await wallet.sendTransaction({
    to: accountB,
    value: ether.utils.parseEther('0.025'),
  });
};

main();
