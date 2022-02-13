// unfortunately eslint doesn't support mjs
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:json/recommended', 'plugin:yml/standard', 'prettier'],
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    // it's recommended to turn off this rule
    // https://github.com/prettier/eslint-config-prettier#cli-helper-tool
    'arrow-body-style': 'off',
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'require-yield': 0,
    'yml/quotes': [
      'error',
      {
        prefer: 'single',
      },
    ],
  },
};
