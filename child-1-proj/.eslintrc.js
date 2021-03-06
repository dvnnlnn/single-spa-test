module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    'prettier',
  ],
  'plugins': [
    'vue',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'camelcase': 'off',
    'prettier/prettier': 'error'
  }
};