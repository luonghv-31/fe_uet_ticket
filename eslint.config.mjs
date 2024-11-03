import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx,css}'],
		ignores: ['.node_modules'],
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},

	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,

	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			'prettier/prettier': [
				'error',
				{
					semi: false,
					tabWidth: 2,
					useTabs: true,
					printWidth: 100,
					singleQuote: true,
					trailingComma: 'all',
					bracketSpacing: true,
					endOfLine: 'crlf',
				},
			],
		},

		plugins: {
			'react-hooks': pluginReactHooks,
			prettier: prettier,
		},
	},
]
