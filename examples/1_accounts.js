#!/usr/bin/env node

require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHCONNECT_API_ENDPOINT
);

const walletAddress = '0xb5aD18d7BF5e0D4C293Ab71745fA14C99A094C36';

const main = async () => {
  const balance = await provider.getBalance(walletAddress);
  console.log(`\nETH Balance of ${walletAddress} ==> ${balance.toString()}\n`);
};

main();
