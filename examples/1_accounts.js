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

// Define wallet address
const walletAddress = '0x4754B849DC5164C4e09f5dE6639077438A94d205';

// Main app logic
const main = async () => {
  try {
    // Retrieve and format wallet balance (WEI --> ETH)
    const balance = await provider.getBalance(walletAddress);
    const balanceInEther = ethers.utils.formatEther(balance);

    // Print wallet address and balance
    console.log(
      '\n\n',
      '\x1b[32m============\x1b[0m',
      '\x1b[1m\x1b[36m\x1b[3mETHEREUM MAINNET BALANCE REPORT\x1b[0m',
      '\x1b[32m=============\x1b[0m',
      '\n\n',
      '\x1b[1m\x1b[33mWallet:\x1b[0m',
      walletAddress,
      '\n',
      '\x1b[1m\x1b[33mBalance:\x1b[0m',
      balanceInEther,
      '\x1b[1m\x1b[33mETH\x1b[0m',
      '\n\n',
      '\x1b[32m==========================================================\x1b[0m',
      '\n\n'
    );
  } catch (error) {
    // Handle and log errors
    console.error(
      '\x1b[31m\x1b[1mError: Failed to retrieve Ethereum balance\x1b[0m\n\n',
      'Reason:',
      error.message,
      '\n',
      'Please check your API endpoint, wallet, and connection.'
    );
  }
};

// Run main function
main();
