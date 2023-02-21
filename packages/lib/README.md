# 📦 @sdk/contract

@sdk/contract is designed to provide a basic framework for creating a client contract. It includes sample code for defining the core instances of a client contract, as well as a basic contract template that can be customized to meet specific needs.

### Apps and Packages

- `test`: contract instance integration tests
- `contracts`: client contract core instances
- `config`: configuration for contract parameters


### NOTE: 
I recommend the following extension to make it easy to switch among packages in your mono repo, as well as open multiple under a single workspace. It makes mono repos work well with the test explorer extension.

link: https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace


## Get started


### Test (mocha)

```
yarn test:contract-sdk
```

### Generate types declaration files

```
yarn generate:contract-sdk
```

### Install dependencies (Yarn)

```
yarn workspace @sdk/contract add @xxx-xxx --dev
```




