#!/usr/bin/env node

// 🌟 Load env vars
require('dotenv').config();
const { ethers } = require('ethers');

// 🔌 Create Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_API_ENDPOINT
);

// 🏦 Client wallet address
const walletAddress = '0x4754B849DC5164C4e09f5dE6639077438A94d205';

// ⚙️  Main event loop unit
const main = async () => {
  try {
    // 💰 Get wallet balance, convert WEI --> ETH
    const balance = await provider.getBalance(walletAddress);
    const balanceInEther = ethers.utils.formatEther(balance);

    // 📊 Log wallet address and balance
    console.log(
      `\n\n\x1b[32m=============\x1b[0m ` +
        `\x1b[1m\x1b[36m\x1b[3mETHEREUM MAINNET BALANCE REPORT\x1b[0m` +
        ` \x1b[32m============\x1b[0m \n\n` +
        `\x1b[1m\x1b[33mWallet Address:\x1b[0m ${walletAddress}\n` +
        `\x1b[1m\x1b[33mCurrent Balance:\x1b[0m ${balanceInEther} \x1b[1m\x1b[33mETH\x1b[0m\n\n` +
        `\x1b[32m==========================================================\x1b[0m\n\n`
    );
  } catch (error) {
    // 🛑 Handle errors
    console.error(
      '\x1b[31m\x1b[1mError: Failed to retrieve Ethereum balance\x1b[0m\n\n',
      'Reason:',
      error.message,
      '\n',
      'Please check your API endpoint, wallet address, and network connection.'
    );
  }
};

// 🚀 Execute!
main();
