import { noHoge } from './no-hoge';
import { noSetter } from './no-setter';
import { noVuePropertyDecorator } from './no-vue-property-decorator';

export = {
  rules: {
    'no-hoge': noHoge,
    'no-setter': noSetter,
    'no-vue-property-decorator': noVuePropertyDecorator,
  },
};
