module.exports = {
  env: {
    es6: true,
    node: true,
  },
  // Make sure ESLint understands ES.Next through babel
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    // Extends default ESLint config
    'eslint:recommended',
    // Extend with import plugin, to check for faulty imports
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    // Make sure that unused args in method do not generate errors in ESLint
    'no-unused-vars': ['error', { args: 'none' }],
  },
  settings: {
    'import/resolver': 'babel-plugin-root-import',
  },
};
