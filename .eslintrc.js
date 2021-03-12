module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  settings: {
    'import/internal-regex': '^@my/',
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
  },
};
