import { Rule } from 'eslint';

export const noHoge: Rule.RuleModule = {
  meta: {
    type: 'problem',
  },
  create(context) {
    return {
      Identifier: (node) => {
        if (node.name === 'hoge') {
          context.report({
            node,
            message: 'You MUST NOT USE hoge variable.',
          });
        }
      },
    };
  },
};
