#!/usr/bin/env node

require('dotenv').config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_ENDPOINT);


const balance = provider.getBalance('0x0D2a409602031Ff5843e3ed4C39a4ce98295E071');
console.log(balance);
