module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['eslint-plugin-local-rules'],
  rules: {
    'local-rules/no-hoge': 'error',
    'local-rules/no-setter': 'error',
    'local-rules/no-vue-property-decorator': [
      'error',
      {
        PropSync:
          'PropSyncデコレータは使わずpropとeventを駆使して実装してください。',
        Model:
          'Modelデコレータは使わずVue2のmodelオプションで設定してください。',
        Emit: 'Emitデコレータは使わずVue2の$emitを使用してください。',
      },
    ],
    'local-rules/no-upper-case-member': 'error',
  },
};
