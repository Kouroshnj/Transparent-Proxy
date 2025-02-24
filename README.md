# Transparent Proxy

This repository contains a simple implementation of a **Transparent Proxy** pattern in Solidity. Transparent proxies allow contract upgrades while preserving user-facing functionality, making them a common choice for upgradeable smart contracts.

## Features

- Implements the **Transparent Proxy Pattern**.
- Allows contract upgrades via an admin-controlled mechanism.
- Ensures only the proxy admin can perform upgrades.
- Maintains separate execution paths for the admin and users.

## Getting Started

### Prerequisites

- **Node.js** and **npm/yarn** installed.
- **Hardhat** for Solidity development.

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/Kouroshnj/Transparent-Proxy.git
cd Transparent-Proxy
npm install
```
### Usage

1. Compile the Contracts
```sh
npx hardhat compile
```

2 . Deploy to a Local Network
```sh
npx hardhat node
```

3. Run scripts
```sh
npx hardhat run ./scripts/upgradeLogicAddress.js 
```
