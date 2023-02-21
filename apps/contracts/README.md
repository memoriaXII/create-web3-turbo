# 📦 contracts

### Apps and Packages

- `test`: contract instance integration tests
- `contracts`: client contract core instances
- `utils`: utils function methods

### NOTE:

I recommend the following extension to make it easy to switch among packages in your mono repo, as well as open multiple under a single workspace. It makes mono repos work well with the test explorer extension.

link: https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace

## Get started

```bash
# install dependencies
npm install

# define the variable in the .env file from .env.example
set -o allexport
source .env
set +o allexport

# compile
yarn compile

# deploy, see package.json for the following pattern: deploy:<...>
npm run deploy:<...>
```
