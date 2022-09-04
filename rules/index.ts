import { noHoge } from './no-hoge';
import { noSetter } from './no-setter';
import { noUpperCaseMember } from './no-upper-case-member';
import { noVuePropertyDecorator } from './no-vue-property-decorator';

export = {
  rules: {
    'no-hoge': noHoge,
    'no-setter': noSetter,
    'no-upper-case-member': noUpperCaseMember,
    'no-vue-property-decorator': noVuePropertyDecorator,
  },
};
