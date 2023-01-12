module.exports = {
  ...require('config/eslint-contract.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
