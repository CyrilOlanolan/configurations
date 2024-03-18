module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    /**
     * Makes sure that all type imported are type-only import
     * Enforce consistent usage of type imports.
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],

    /**
     * Disallow conditionals where the type is always truthy or falsy.
     */
    '@typescript-eslint/no-unnecessary-condition': 'error',

    /**
     * Require promise-like statements to be handled appropriately.
     */
    '@typescript-eslint/no-floating-promises': 'error',

    /**
     * Sorts interface keys in ascending order.
     */
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      { caseSensitive: true, natural: true, requiredFirst: true },
    ],

    /**
     * Sorts enum keys in ascending order.
     */
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      { caseSensitive: true, natural: true },
    ],
  },
  settings: {
    'import/resolver': {
      /**
       * Resolves path aliases in tsconfig.ts
       */
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
};
