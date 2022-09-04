import { Rule } from 'eslint';

export const noVuePropertyDecorator: Rule.RuleModule = {
  meta: {
    type: 'problem',
    schema: [
      {
        type: 'object',
      },
    ],
  },
  create(context) {
    const errorKeyMap = context.options[0] || {};
    return {
      ImportDeclaration: (node) => {
        if (node.source.value !== 'vue-property-decorator') {
          return;
        }
        node.specifiers.forEach((specifier) => {
          if (specifier.local.name in errorKeyMap) {
            context.report({
              node,
              message: errorKeyMap[specifier.local.name],
            });
          }
        });
      },
    };
  },
};
