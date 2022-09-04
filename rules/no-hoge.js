module.exports = (context) => {
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
};
