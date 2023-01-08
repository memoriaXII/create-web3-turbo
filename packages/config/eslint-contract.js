module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ]
};
