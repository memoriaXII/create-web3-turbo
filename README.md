# 📦 Turborepo Web3 Starter Kit

<img width="1254" alt="Screenshot 2023-01-18 at 5 25 01 PM" src="https://user-images.githubusercontent.com/56249189/213133544-bcc0dae1-9146-49c2-b2ab-263d14cb671e.png">

[⚡ Dev.to Post](https://dev.to/zachilee/all-in-one-ethereum-dapp-monorepo-starter-kit-3fd7)

This boilerplate is based on [Turborepo](https://github.com/vercel/turborepo).
It uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: A [Next.js](https://nextjs.org) based app with typescript,wagmi,rainbowkit,ether.js
- `contracts`: hardhat,typescript,chai,ethers
- `storybook`: storybook
- `ui`: a custom shared ui component library
- `lib`: sdk library for core instances
- `config`: lint and common config configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `husky`: lint staged pre-commit check

### Stack

This starter kit contains:

- [Next.js](https://nextjs.org) framework
- [WAGMI Hooks](https://github.com/tmm/wagmi) advanced web3 react hooks
- [ethers.js](https://github.com/ethers-io/ethers.js) integrate with blockchain
- [Tailwind](https://tailwindui.com/) Utility-First Fundamentals
- [Typechain](https://github.com/dethcrypto/TypeChain) to keep those end-to-end types generated from ABIs
- [Hardhat](https://hardhat.org/) Deploy && compile smart Contracts

### NOTE:

I recommend the following extension to make it easy to switch among packages in your mono repo, as well as open multiple under a single workspace. It makes mono repos work well with the test explorer extension.

link: https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace

## Get started

```
git clone https://github.com/memoriaXII/turborepo-web3-starter-kit.git
```

```
cd turborepo-web3-starter-kit
yarn install
```

### Front-end

```
yarn dev
```

### Smart Contracts

```
yarn hardhat:compile
yarn hardhat:node
yarn hardhat:test
```

### Story Book

```
yarn storybook
yarn build-storybook
```

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```
