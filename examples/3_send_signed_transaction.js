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
const accountB = '0x0D2a409602031Ff5843e3ed4C39a4ce98295E071';

// Define the sender's private key
const privateKey = process.env.WALLET_PRIVATE_KEY;

// Create a Wallet instance with the private key and a provider
const wallet = new ethers.Wallet(privateKey, provider);

// Main app logic
const main = async () => {
  // Show accountA and accountB balance before transfer
  const senderBalanceBefore = await provider.getBalance(accountA);
  const receiverBalanceBefore = await provider.getBalance(accountB);

  console.log(
    `\n\n\x1b[1m\x1b[36mSender balance before: \x1b[37m${ethers.utils.formatEther(
      senderBalanceBefore
    )}`
  );
  console.log(
    `\x1b[1m\x1b[36mRecipient balance before: \x1b[37m${ethers.utils.formatEther(
      receiverBalanceBefore
    )}\n`
  );

  // Send 0.025 Ether to accountB
  const tx = await wallet.sendTransaction({
    to: accountB,
    value: ethers.utils.parseEther('0.001'),
  });

  // Wait for the transaction to be mined
  await tx.wait();
  console.log(tx);

  // Show accountA and accountB balance after transfer
  const senderBalanceAfter = await provider.getBalance(accountA);
  const receiverBalanceAfter = await provider.getBalance(accountB);

  console.log(
    `\n\x1b[1m\x1b[36mSender balance after: \x1b[37m${ethers.utils.formatEther(
      senderBalanceAfter
    )}`
  );
  console.log(
    `\x1b[1m\x1b[36mRecipient balance after: \x1b[37m${ethers.utils.formatEther(
      receiverBalanceAfter
    )}\n\n`
  );
};

main();
