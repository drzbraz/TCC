module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'class-methods-use-this': 0,
    'no-param-reassign': 'off',
    'import/no-named-as-default': false,
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
