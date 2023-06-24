# 📦 Create web3 turbo

<img width="1920" alt="Cover - 1" src="https://github.com/memoriaXII/create-web3-turbo/assets/56249189/0ebff69f-084e-49e6-8db1-c403f06e872b">

This boilerplate is based on [Turborepo](https://github.com/vercel/turborepo).
It uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

## Installation

There are two ways of initializing an app using `create-web3-turbo` starter. You can either use this repository as a template or use Turbo's CLI to init your project:

```bash
npx create-turbo@latest -e https://github.com/memoriaXII/create-web3-turbo
```

### Apps and Packages

- `web`: A [Next.js](https://nextjs.org) based app with typescript,wagmi,rainbowkit,ether.js
- `contracts`: hardhat,typescript,chai,ethers
- `storybook`: storybook
- `ui`: a custom shared ui component library
- `lib`: sdk library for core instances
- `config`: lint and common config configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `husky`: lint staged pre-commit check


It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ pull_request_template
  └─ workflows
        └─ CI
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ contracts
  |   
  └─ web
  |   
  └─ storybook

packages
 ├─ config
 |   └─ lint config
 ├─ lib
     └─ sdk library for core instances
 └─ ui
     └─ a custom shared ui component library
```

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
