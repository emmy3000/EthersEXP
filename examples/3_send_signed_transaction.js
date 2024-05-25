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
const accountA = '0x8B78368464b516b93F6cB331B4515dB509aF6D06';
const accountB = '0x0D2a409602031Ff5843e3ed4C39a4ce98295E071';

// Define sender's private key
const privateKey = process.env.WALLET_PRIVATE_KEY;

// Create Wallet instance with private key and provider
const wallet = new ethers.Wallet(privateKey, provider);

// Main app logic
const main = async () => {
  // Get balances before transfer
  const [senderBalanceBefore, receiverBalanceBefore] = await Promise.all([
    provider.getBalance(accountA),
    provider.getBalance(accountB),
  ]);

  // Print initial balances
  console.log(
    '\n\n\x1b[1m\x1b[36mSender: \x1b[37m',
    ethers.utils.formatEther(senderBalanceBefore),
    '\x1b[33mETH'
  );
  console.log(
    '\x1b[1m\x1b[36mRecipient: \x1b[37m',
    ethers.utils.formatEther(receiverBalanceBefore),
    '\x1b[33mETH\n'
  );

  // Send 0.025 Ether to accountB
  const tx = await wallet.sendTransaction({
    to: accountB,
    value: ethers.utils.parseEther('0.025'),
  });

  // Wait for transaction to be mined
  await tx.wait();
  console.log(tx);

  // Get balances after transfer
  const [senderBalanceAfter, receiverBalanceAfter] = await Promise.all([
    provider.getBalance(accountA),
    provider.getBalance(accountB),
  ]);

  // Print updated balances
  console.log(
    '\n\x1b[1m\x1b[36mSender: \x1b[37m',
    ethers.utils.formatEther(senderBalanceAfter),
    '\x1b[33mETH'
  );
  console.log(
    '\x1b[1m\x1b[36mRecipient: \x1b[37m',
    ethers.utils.formatEther(receiverBalanceAfter),
    '\x1b[33mETH\n\n'
  );
};

main();
