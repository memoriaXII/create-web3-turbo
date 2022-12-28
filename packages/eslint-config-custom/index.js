module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		"react": {
			"version": "detect"
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.tsx'],
			},
		},
		'import/extensions': ['.js', '.ts', '.tsx'],
	},
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		}
	},
	plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
	ignorePatterns: ['src/**/*.svg', '**/node_modules/**'],
	rules: {
		'consistent-return': 0,
		'function-paren-newline': 0,
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
		'jest/no-mocks-import': 0,
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
		'@typescript-eslint/comma-dangle': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/indent': 0,
	},
};
