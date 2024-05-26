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

// Define the Chainlink smart contract's ABI
const ERC20_ABI = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount) returns (bool)',
];

// Define the Chainlink Token address
const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

// Create Chainlink contract instance
const contract = new ethers.Contract(address, ERC20_ABI, provider);

// Main application logic
const main = async () => {
  // Get sender's initial balance
  const senderInitialBalance = await contract.balanceOf(senderAccount);
  console.log(`\nReading from ${address}`);
  console.log(`Sender Initial Balance: ${senderInitialBalance}`);

  // Connect contract to wallet for signing transactions
  const walletConnectedContract = contract.connect(wallet);

  // Transfer balance to recipient account
  const tx = await walletConnectedContract.transfer(
    recipientAccount,
    senderInitialBalance
  );
  await tx.wait();
  console.log('\nTransaction Mined:', tx);

  // Get updated balances for sender and recipient
  const [senderUpdatedBalance, recipientUpdatedBalance] = await Promise.all([
    contract.balanceOf(senderAccount),
    contract.balanceOf(recipientAccount),
  ]);

  // Log updated balances
  console.log(`\nReading from ${address}`);
  console.log(`Sender Updated Balance: ${senderUpdatedBalance}`);
  console.log(`Recipient Updated Balance: ${recipientUpdatedBalance}\n`);
};

main();
