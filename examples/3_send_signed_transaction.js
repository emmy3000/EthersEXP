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
  // Show accountA and accountB balance before transfer
  const senderBalanceBefore = await provider.getBalance(accountA);
  const receiverBalanceBefore = await provider.getBalance(accountB);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `Recipient balance before: ${ethers.utils.formatEther(
      receiverBalanceBefore
    )}`
  );

  // Send 0.025 Ether to accountB
  const tx = await wallet.sendTransaction({
    to: accountB,
    value: ethers.utils.parseEther('0.025'),
  });

  // Wait for the transaction to be mined
  await tx.wait();

  // Retrieve and display transaction details
  console.log('\nTransaction Details:');
  console.log(`- Transaction Hash: ${tx.hash}`);
  console.log(`- From: ${tx.from}`);
  console.log(`- To: ${tx.to}`);
  console.log(`- Value: ${ethers.utils.formatEther(tx.value)} ETH`);
  console.log(`- Gas Used: ${tx.gasUsed.toString()}`);
  console.log(`- Status: ${tx.status === 1 ? 'Success' : 'Failed'}`);

  // Show accountA and accountB balance after transfer
  const senderBalanceAfter = await provider.getBalance(accountA);
  const receiverBalanceAfter = await provider.getBalance(accountB);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `Recipient balance after: ${ethers.utils.formatEther(
      receiverBalanceAfter
    )}\n`
  );
};

main();
