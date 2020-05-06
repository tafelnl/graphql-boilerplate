module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  settings: {
    node: {
      allowModules: ['~'],
    },
  },
  // prefer the next rule exception above the global settings exception
  // when this issue is solved: https://github.com/mysticatea/eslint-plugin-node/issues/217
  // 'rules': {
  //   'node/no-extraneous-require': ['error', {
  //     'allowModules': ['~']
  //   }],
  // },
};
