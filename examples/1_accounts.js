#!/usr/bin/env node

require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_API_ENDPOINT
);

const walletAddress = '0xb5aD18d7BF5e0D4C293Ab71745fA14C99A094C36';

const main = async () => {
  const balance = await provider.getBalance(walletAddress);
  const balanceInEther = ethers.utils.formatEther(balance);
  console.log(
    `\n\n\x1b[32m=============\x1b[0m ` +
      `\x1b[1m\x1b[36m\x1b[3mETHEREUM MAINNET BALANCE REPORT\x1b[0m` +
      ` \x1b[32m============\x1b[0m \n\n` +
      `\x1b[1m\x1b[33mWallet Address:\x1b[0m ${walletAddress}\n` +
      `\x1b[1m\x1b[33mCurrent Balance:\x1b[0m ${balanceInEther} \x1b[1m\x1b[33mETH\x1b[0m\n\n` +
      `\x1b[32m==========================================================\x1b[0m\n\n`
  );
};

main();
