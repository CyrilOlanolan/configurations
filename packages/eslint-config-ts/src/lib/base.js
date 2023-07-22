module.exports = {
  plugins: ['unused-imports', 'import', 'simple-import-sort'],
  extends: ['plugin:import/recommended', 'prettier'],
  rules: {
    /**
     * Disallow the use of console
     * This rule only allows console.warn() and console.error().
     */
    'no-console': ['error', { allow: ['warn', 'error'] }],

    /**
     * Enforce consistent linebreak style
     */
    'linebreak-style': ['error', 'unix'],

    /**
     * Enforce minimum and maximum identifier lengths
     */
    'id-length': ['error', { min: 2, exceptionPatterns: ['[x-z]'] }],

    /**
     * Disallow specified modules when loaded by import
     */
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            /**
             * This pattern prevents us from using relative path imports
             *
             * @link https://stackoverflow.com/a/65684336
             */
            group: ['.*'],
            message: 'Relative imports are not allowed.',
          },
        ],
      },
    ],

    /**
     * Disallow unused imports.
     */
    'unused-imports/no-unused-imports': 'error',

    /**
     * Disallow unused variables
     * To ignore unused variables, prefix with an underscore (_)
     */
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    /**
     * Ensures that there is no resolvable path back to this module via its dependencies.
     */
    'import/no-cycle': [2, { maxDepth: 10 }],

    /**
     * Forbid the import of external modules that are not declared in the
     * package.json's dependencies, devDependencies, optionalDependencies,
     * peerDependencies, or bundledDependencies.
     */
    'import/no-extraneous-dependencies': ['error'],

    /**
     * Reports if a resolved path is imported more than once.
     */
    'import/no-duplicates': ['error'],

    /**
     * Forbid a module from importing itself.
     */
    'import/no-self-import': 'error',

    /**
     * Sorts the import statements
     */
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // `react` or `next` related packages come first.
          ['^react', '^next'],
          // Files starting with @
          ['^@?\\w'],
          // `app` or `pages` directory files
          ['app/*', 'pages/*'],
          // `src` files
          ['src/data', 'src/layouts', 'src/components', 'src/*'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
