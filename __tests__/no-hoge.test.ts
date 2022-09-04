import { noHoge } from '../rules/no-hoge';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  },
});

ruleTester.run('no-hoge', noHoge, {
  valid: [
    // prettier対策
    { code: '' },
    { code: 'const num = 10;' },
  ],
  invalid: [
    {
      code: 'const hoge = "hogehoge"; ',
      errors: [
        {
          message: 'You MUST NOT USE hoge variable.',
        },
      ],
    },
  ],
});
