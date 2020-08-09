module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended',],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'react' ],
	rules: {
		'semi': [2, 'always'],
		'no-trailing-spaces': 1,
		'brace-style': [2, 'allman', {
			"allowSingleLine": true
		}],
		'indent': ['warn', 'tab'],
		'no-tabs': 0,
		'spaced-comment': 1,
		'react/prop-types': 1,
		'no-unused-vars': 1,
		'operator-linebreak': [0, 'before'],
		'react/prefer-stateless-function': 1,
		'no-unused-expressions': ["warn", { "allowShortCircuit": true, "allowTernary": true }],
		'react/jsx-no-bind': [0, {
			'ignoreRefs': false,
			'allowArrowFunctions': false,
			'allowBind': true
		}],
	}
};
