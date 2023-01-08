module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint-config-prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json']
      }
    }
  },
  rules: {
    // react
    'consistent-return': 0,
    'function-paren-newline': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/no-unescaped-entities': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/indent': 0,
    // next
    '@next/next/no-html-link-for-pages': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] }]
      }
    }
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo'
  ]
};
