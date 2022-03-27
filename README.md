# Konomi Transaction Fullstack ( Localhost:8545 )

https://user-images.githubusercontent.com/56249189/160244513-423eec2d-f6aa-4e17-bbfe-61e4a73cb1ff.mp4

This project demonstrates single transaction and batch transaction use case. It comes with a transaction and batch transaction solidity contract, a reactjs front-end to interact with transaction contract, a backend server to subscribe event and continue listen using ether.js websocket api

Try running some of the following tasks:

### Note :

Please run client and backend server first to launch the app

```shell

yarn start : front-end

node backend/server.js : back-end

npx hardhat node : solidity
npx hardhat run --network localhost contract-scripts/deploy.js : solidity


```

Native Token to sent : ETH

### .env

```shell

REACT_APP_INFURA_KEY=""
REACT_APP_ENV="MAINNET"

```

### Init Package Setup

```shell
yarn
```

### Typechain

```shell
npx typechain --target ethers-v5 --out-dir typechain {YOUR_PATH}/abi.json
```

### Smart Contract ( Solidity, Hardhat )

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node contract-scripts/deploy.js
npx hardhat help
npx hardhat run --network localhost contract-scripts/deploy.js
```

### Backend

```shell
node backend/server.js
```

After event listener init, will receive any transaction that related to the events, including batch transaction and single transaction event.

Subscribe event listener screenshot ( terminal )

<img width="1512" alt="Screen Shot 2022-03-23 at 12 56 47 AM" src="https://user-images.githubusercontent.com/56249189/159534018-b098884a-cef8-4c94-9ca6-2baf89f3540d.png">

### Frontend

```shell
yarn start
```

### Skillsets

```shell

Front-end : React.js, Typescript, Redux, Redux-thunk, custom webpack, ether.js, web3.js, scss
Back-end : Express, Node.js
Smart-contract: Solidity, ethers, hardhat

```

### Todo

1. Custom token transcation
2. Solidity test coverage
3. Typescript version of Express

### Reference

1. Web3React: https://hackmd.io/Ykpp1MWLTjixIZG2ZJEShA
# web3-typescript-fullstack
