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

// Main app logic
const main = async () => {
  // Get balances before transfer
  const [senderInitialBalance, recipientInitialBalance] = await Promise.all([
    provider.getBalance(senderAccount),
    provider.getBalance(recipientAccount),
  ]);

  // Print initial account balances
  console.log(
    '\n\n\x1b[1m\x1b[36mSender: \x1b[37m',
    ethers.utils.formatEther(senderInitialBalance),
    '\x1b[33mETH'
  );
  console.log(
    '\x1b[1m\x1b[36mRecipient: \x1b[37m',
    ethers.utils.formatEther(recipientInitialBalance),
    '\x1b[33mETH\n'
  );

  // Transfer ETH to the recipient's account
  const tx = await wallet.sendTransaction({
    to: recipientAccount,
    value: ethers.utils.parseEther('0.025'),
  });

  // Wait for the transaction to be mined
  await tx.wait();
  console.log(tx);

  // Get balances after transfer
  const [senderUpdatedBalance, recipientUpdatedBalance] = await Promise.all([
    provider.getBalance(senderAccount),
    provider.getBalance(recipientAccount),
  ]);

  // Print updated account balances
  console.log(
    '\n\x1b[1m\x1b[36mSender: \x1b[37m',
    ethers.utils.formatEther(senderUpdatedBalance),
    '\x1b[33mETH'
  );
  console.log(
    '\x1b[1m\x1b[36mRecipient: \x1b[37m',
    ethers.utils.formatEther(recipientUpdatedBalance),
    '\x1b[33mETH\n\n'
  );
};

main();
