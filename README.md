# EthersEXP: Exploring the Ethers.js Library

## Overview
**EthersEXP** is a comprehensive project that explores the essential concepts and skills required to work with the Ethers.js library. It aims to provide a solid foundation for developers looking to dive into the world of Ethereum development using Ethers.js.

## Tech Stack
The **EthersEXP** project utilizes the following technologies and tools:

- [Ethers.js](https://docs.ethers.org/v5/): A lightweight and modular Ethereum library that provides a robust set of features for interacting with the Ethereum Blockchain network.
- [Node.js](https://nodejs.org/en/): A JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser, enabling the creation of command-line tools and server-side applications.
- [Infura](https://www.infura.io/): A Web3 backend and Infrastructure-as-a-Service (IaaS) provider that offers a range of services and tools for blockchain developers, including access to Ethereum nodes and APIs.

## Key Features
The **EthersEXP** project delivers a range of features, including:

- Detailed explanations of core Ethers.js functionalities
- Interactive examples and code snippets covering various use cases
- Tutorials on setting up development environments for Ethereum projects
- Guides on common Ethereum development tasks, such as:
  - Reading wallet balances (Ether and ERC-20 tokens)
  - Transferring Ether between accounts
  - Deploying contracts on the Kovan testnet
  - Querying and inspecting Ethereum blocks and transactions
  - Handling contract events and streams

## Project Structure
The **EthersEXP** project is organized as follows:

```markdown
EthersEXP/
├── .env
├── README.md
├── .gitignore
├── examples/
│   ├── 1_accounts.js
│   ├── 2_read_smart_contract.js
│   ├── 3_send_signed_transaction.js
│   ├── 4_write_contract.js
│   ├── 5_contract_event_stream.js
│   └── 6_inspecting_blocks.js
├── node_modules/
├── package-lock.json
└── package.json
```

The `examples/` directory contains a collection of Ethers.js-based code samples that demonstrate the various features and functionalities covered in the project.

## Getting Started

### 1. Clone the Repository
Begin by cloning the **EthersEXP** repository into a local environment where you'll be developing the project:

```shell
git clone https://github.com/emmy3000/EthersEXP.git
```

### 2. Install Dependencies
Install the required dependencies defined in the `package.json` file using the following command:

```shell
npm install
```
This will ensure that all the necessary packages and libraries are available for the project's development.

### 3. Set Up an Ethereum Node
To interact with the Ethereum blockchain, you'll need to set up a node. You can use a reputable open-source Web3 IaaS platform provider like Infura to simplify this process:
 - **Create an Infura Account**: Sign up for a free personal account on the [Infura website](https://www.infura.io/).
 - **Set Up an Ethereum Node**: Use Infura's platform to create a simple Ethereum node for development and testing purposes.
 - **Obtain API Credentials**: After setting up the node, you'll be provided with unique API credentials (API Key, API Secret Key, and API Endpoint) in the "API Keys" section of your Infura dashboard.

**Note:** It's crucial to keep these API credentials secure and never share them publicly. Store them in a private, highly-secured location, accessible only to you.

### 4. Securely Store API Credentials
To protect your sensitive API credentials from being exposed in the codebase, store them in a `.env` file. Create a `.env` file in the project's root directory and add the following variables:

```shell
# Store API credentials as environment variables.
ETH_NODE_API_KEY=***your_api_key_here***
ETH_NODE_API_SECRET_KEY=***your_api_secret_key_here***
ETH_NODE_API_ENDPOINT=***your_api_active_endpoint_here***
```
**Important:** Ensure that the `.env` file is excluded from your project's version control by adding it to the `.gitignore` file. This will prevent the API credentials from being accidentally committed to the remote repository.

### 5. Install the dotenv Package
To easily access the environment variables stored in the `.env` file, install the `dotenv` package using the following command:

```shell
npm install dotenv
```
This package will load the environment variables from the `.env` file into the `process.env` global object, making them available throughout your project.

### 6. Start the Development Server
Finally, start the development server with the following command:

```shell
npm start
```
This will start the development server, and you can access the **EthersEXP** project by opening your browser and navigating to *http://localhost:3000*.

By following these steps, you'll have a fully set up development environment for the **EthersEXP** project, with secure access to the Ethereum node and its API credentials.

## Contributing
We welcome contributions from the community! If you'd like to contribute to **EthersEXP**, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Implement your changes
4. Submit a pull request

## License
**EthersEXP** is released under the [MIT License](LICENSE).

## Author
Emeka Emodi

## Contact
For any questions or inquiries, please contact me at [emodiemeka@gmail.com](mailto:emodiemeka@gmail.com).
