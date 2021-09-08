const path = require('path')
/**
 * @type {import("eslint").Linter.Config} config
 */
const config = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    "eol-last": ["error", "always"],
    'no-under': "off",
    'no-console': 'warn',
    strict: ['error', 'never'],
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react-hooks', "@emotion"],
  settings: {
    react: {
      version: '17.0.2',
    },
    'import/resolver': {
      jest: {
        jestConfigFile: path.join(__dirname, './jest.config.js'),
      },
    },
  },
}

module.exports = config
