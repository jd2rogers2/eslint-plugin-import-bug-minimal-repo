module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    // 'plugin:import/recommended',
    // 'airbnb-base',
  ],
  plugins: [
    'import'
  ],
  parserOptions: {
    ecmaVersion: 11,
		sourceType: 'module',
  },
  settings: {
    'import/internal-regex': '^@my/',
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
    'import/ignore': ['!^@my'],
  },
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'semi': ['warn'],
  },
};
