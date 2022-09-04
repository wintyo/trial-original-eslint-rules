import { noUpperCaseMember } from '../rules/no-upper-case-member';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  },
});

const validCode = `
const GREETING = 'Hello';

class Hoge {
  sayHello(name) {
    return GREETING + ', ' + name + '!';
  }
}
`;

const invalidCode = `
class Hoge {
  // 以下のコードがbabel通さないとそもそも無理だった。。
  // GREETING = 'Hello'

  sayHello(name) {
    return this.GREETING + ', ' + name + '!';
  }
}
`;

ruleTester.run('no-upper-case-member', noUpperCaseMember, {
  valid: [{ code: validCode }],
  invalid: [
    {
      code: invalidCode,
      errors: [
        {
          message:
            '定数と思われるアッパーケースはメンバとして使うことを禁止しています。this.経由ではなく、直接その定数を使用してください。',
        },
      ],
    },
  ],
});
