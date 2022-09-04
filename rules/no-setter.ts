import { Rule } from 'eslint';

export const noSetter: Rule.RuleModule = {
  meta: {
    type: 'problem',
  },
  create(context) {
    return {
      ClassBody: (node) => {
        node.body.forEach((body) => {
          if (body.type === 'MethodDefinition') {
            if (body.kind === 'set') {
              context.report({
                node,
                message: 'setterの使用は禁止しています。',
              });
            }
          }
        });
      },
    };
  },
};
