# solidity-prac-v1

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
