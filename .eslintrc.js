module.exports = {
  env: {
    jest: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0, /* escribimos código en Windows o en Unix */
    'prefer-destructuring': 0,
    'import/extensions': 0, /* deshabilita la regla de import/extensions */
    'import/prefer-default-export': 0,
  },
};
