#!/usr/bin/env node

require('dotenv').config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ETHCONNECT_API_KEY");
console.log(provider);
