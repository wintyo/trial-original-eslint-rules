import { noSetter } from '../rules/no-setter';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  },
});

const validCode = `
class Hoge {
  setValue(newValue) {
    this.localValue = newValue;
  }
}
`;

const invalidCode = `
class Hoge {
  set value(newValue) {
    this.localValue = newValue;
  }
}
`;

ruleTester.run('no-setter', noSetter, {
  valid: [
    {
      code: validCode,
    },
  ],
  invalid: [
    {
      code: invalidCode,
      errors: [{ message: 'setterの使用は禁止しています。' }],
    },
  ],
});
