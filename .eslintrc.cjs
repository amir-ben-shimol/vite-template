module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'unused-imports', 'import', 'deprecation', 'unicorn', 'jsx-a11y', 'react', 'react-hooks'],
	rules: {
		'capitalized-comments': ['error'],
		'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'semi': ['error', 'always'],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-duplicate-imports': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable-loop': 'error',
		'no-multiple-empty-lines': 'error',
		'no-trailing-spaces': 'error',
		'require-await': 'error',
		'no-var': 'error',
		'no-labels': 'error',
		'no-inline-comments': 'error',
		'eqeqeq': 'error',
		'no-eval': 'error',
		'no-implicit-globals': 'error',
		'no-undef': 'off',
		'no-useless-call': 'error',
		'curly': ['error', 'all'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: [
					'import',

					'let',
					'const',
					'var',

					'return',
					'throw',
					'if',
					'for',
					'switch',
					'continue',
					'break',
					'class',
					'do',
					'try',
					'export',
					'function',
					'while',
					'block',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['singleline-let', 'singleline-const', 'singleline-var'],
				next: ['singleline-let', 'singleline-const', 'singleline-var'],
			},
			{
				blankLine: 'any',
				prev: 'import',
				next: 'import',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['return', 'throw', 'if', 'for', 'switch', 'continue', 'break', 'class', 'do', 'try', 'export', 'function', 'while', 'block'],
			},
		],
		'no-restricted-imports': [
			'error',
			{
				name: 'lodash',
				message: 'The year is not 2015 anymore',
			},
		],
		'no-warning-comments': ['error'],

		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': ['error'],
		'@typescript-eslint/ban-ts-comment': ['error'],
		'@typescript-eslint/ban-tslint-comment': ['error'],
		'@typescript-eslint/no-require-imports': ['error'],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/consistent-type-imports': ['error'],
		'@typescript-eslint/await-thenable': 'error',

		'unused-imports/no-unused-imports': 'error',

		'import/default': ['error'],
		'import/no-absolute-path': ['error'],
		'import/no-self-import': ['error'],
		'import/no-cycle': ['error'],
		'import/no-useless-path-segments': ['error'],
		'import/export': ['error'],
		'import/no-deprecated': ['error'],
		'import/no-extraneous-dependencies': ['error'],
		'import/no-mutable-exports': ['error'],
		'import/no-unused-modules': ['error'],
		'import/no-commonjs': ['error'],
		'import/no-amd': ['error'],
		'import/first': ['error'],
		'import/exports-last': ['error'],
		'import/no-duplicates': ['error'],
		'import/newline-after-import': ['error'],
		'import/no-named-default': ['error'],
		'import/no-anonymous-default-export': ['error'],
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: '@/**',
						group: 'external',
						position: 'after',
					},
				],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			},
		],

		'deprecation/deprecation': 'error',

		'unicorn/catch-error-name': 'error',
		'unicorn/new-for-builtins': 'error',
		'unicorn/prefer-node-protocol': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/throw-new-error': 'error',
		'unicorn/text-encoding-identifier-case': 'error',
		'unicorn/switch-case-braces': 'error',
		'unicorn/no-empty-file': 'error',
		'no-process-env': ['error'],
		'jsx-quotes': ['error', 'prefer-double'],

		'jsx-a11y/alt-text': 'error',
		'jsx-a11y/html-has-lang': 'error',
		'jsx-a11y/img-redundant-alt': ['error'],
		'jsx-a11y/lang': 'error',
		'jsx-a11y/no-redundant-roles': 'error',

		'react/jsx-indent': 'off',
		'react/jsx-fragments': 'error',
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],
		'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
		'react/jsx-sort-props': ['error', { callbacksLast: true, noSortAlphabetically: true }],
		'react/jsx-props-no-spreading': ['error', { exceptions: ['button'] }],
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-pascal-case': 'error',
		'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-no-script-url': 'error',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'never' } }],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/self-closing-comp': 'error',
		'react/void-dom-elements-no-children': 'error',
		'react/style-prop-object': 'error',
		'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
		'react/button-has-type': 'error',
		'react/destructuring-assignment': ['error', 'never'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/no-children-prop': ['error'],
		'react/no-deprecated': ['error'],
		'react/no-danger-with-children': ['error'],
		'react/no-multi-comp': ['error'],
		'react/no-unescaped-entities': ['error'],
		'react/no-unknown-property': ['error'],
		'react/prefer-read-only-props': ['error'],
		'react/jsx-handler-names': ['error', { eventHandlerPrefix: false }],
		'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
		'react/jsx-max-depth': ['error', { max: 10 }],
		'react/jsx-no-duplicate-props': ['error'],
		'react-hooks/rules-of-hooks': ['error'],
	},

	overrides: [
		{
			files: ['**/*.{cjs,js}'],
			rules: {
				'import/no-commonjs': 'off',
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['./src/assets/icons.ts', './src/App.router.tsx'],
			rules: {
				'max-lines': 'off',
			},
		},
		{
			files: ['./vite.config.ts'],
			rules: {
				'no-process-env': 'off',
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
