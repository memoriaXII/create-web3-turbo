module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/no-extraneous-dependencies': 0,
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
