module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['eslint-plugin-local-rules'],
  rules: {
    'local-rules/no-hoge': 'error',
  },
};
