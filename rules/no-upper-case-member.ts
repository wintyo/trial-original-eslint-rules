import { Rule } from 'eslint';

export const noUpperCaseMember: Rule.RuleModule = {
  meta: {
    type: 'problem',
  },
  create(context) {
    return {
      MemberExpression: (node) => {
        if (node.property.type !== 'Identifier') {
          return;
        }
        const { name } = node.property;
        if (name === name.toUpperCase()) {
          context.report({
            node,
            message:
              '定数と思われるアッパーケースはメンバとして使うことを禁止しています。this.経由ではなく、直接その定数を使用してください。',
          });
        }
      },
    };
  },
};
