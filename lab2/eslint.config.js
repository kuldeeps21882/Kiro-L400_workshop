const tseslint = require('typescript-eslint');
module.exports = tseslint.config({
  files: ['src/**/*.ts'],
  extends: [tseslint.configs.recommended],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'max-lines-per-function': ['error', { max: 30 }],
  },
});
