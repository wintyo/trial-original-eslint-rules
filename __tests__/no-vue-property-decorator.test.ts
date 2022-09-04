import { noVuePropertyDecorator } from '../rules/no-vue-property-decorator';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
});

const option = {
  PropSync: 'PropSyncデコレータは使わずpropとeventを駆使して実装してください。',
  Model: 'Modelデコレータは使わずVue2のmodelオプションで設定してください。',
  Emit: 'Emitデコレータは使わずVue2の$emitを使用してください。',
};

const validCode = `
import { Vue } from 'vue-property-decorator';
`;

const invalidCode = `
import { Vue, PropSync, Model, Emit } from 'vue-property-decorator';
`;

ruleTester.run('no-vue-property-decorator', noVuePropertyDecorator, {
  valid: [
    { code: validCode, options: [option] },
    // invalidCodeでもチェックする項目がなければpassする
    { code: invalidCode },
  ],
  invalid: [
    {
      code: invalidCode,
      options: [option],
      errors: [
        {
          message:
            'PropSyncデコレータは使わずpropとeventを駆使して実装してください。',
        },
        {
          message:
            'Modelデコレータは使わずVue2のmodelオプションで設定してください。',
        },
        {
          message: 'Emitデコレータは使わずVue2の$emitを使用してください。',
        },
      ],
    },
  ],
});
