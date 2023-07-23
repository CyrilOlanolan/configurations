# @cyrilolanolan/eslint-config-ts

_ESLint configuration for TypeScript projects_

This configuration encourages best practices by using a set of rules for consistent and high-quality coding across all projects.

- ✨[Prettier](https://prettier.io/) for code formatting
- ✨Supports linting for [React](https://reactjs.org/)

## Installation

1. Install the package with its peer dependencies:

   ```bash
   npm i -D @cyrilolanolan/eslint-config-ts typescript eslint prettier
   ```

2. Extend this configuration in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

   ```json
   {
     "eslintConfig": {
       "extends": "@cyrilolanolan/ts"
     }
   }
   ```

## Configurations

This package uses the following recommended configurations:

- ✔️ [@typescript-eslint](https://typescript-eslint.io/)/eslint-recommended
- ✔️ [prettier](https://prettier.io/)/recommended
- ✔️ [import](https://github.com/import-js/eslint-plugin-import)/recommended
- ✔️ [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)/recommended

### Base

- `no-console` - disallow the use of console
- `linebreak-style` - enforce consistent linebreak style
- `id-length` - enforce minimum and maximum identifier lengths
- `no-restricted-imports` - relative imports are not allowed
- `unused-imports/no-unused-imports` - disallow unused imports
- `import/no-cycle` - ensures that there is no resolvable path back to this module via its dependencies
- `import/no-extraneous-dependencies` - forbid the import of external modules that are not declared in package.json
- `import/no-duplicates` - reports if a resolved path is imported more than once
- `import/no-self-import` - forbid a module from importing itself
- `simple-import-sort/imports` - sorts the import statements

### TypeScript

- `@typescript-eslint/consistent-type-imports` - enforce consistent usage of type imports
- `@typescript-eslint/no-unnecessary-condition` - disallow conditionals where the type is always truthy or falsy
- `typescript-sort-keys/interface` - sorts interface keys in ascending order
- `typescript-sort-keys/string-enum` - typescript-sort-keys/string-enum

### React

- `react/self-closing-comp` - enforce self-closing component when there's no children

## ⚠️ Gotcha!

### Non standard `tsconfig.json` paths

If you use a TypeScript configuration file other than the default (`tsconfig.json` under the project's root), you need to specify its path:

```json
{
  "eslintConfig": {
    "parserOptions": {
      "project": "./apps/ts-app/tsconfig.dev.json"
    }
  }
}
```

### New ESLint configuration system (`eslint.config.js`)

ESLint announced a new configuration system, and from version `8.21.0`, the old `.eslintrc*` is no longer used. It would still supported in `v8`, however in `v9`, the legacy configuration system would _not be supported_.

This configuration uses the **_legacy format_** (`.eslintrc*`) as of the moment and **_will be migrating_** to the new format once major frameworks ship out with the new one by default.

Good thing, ESLint has provided a package to continue using eslintrc-style shared configs and settings within a flat config file. In the meantime, here's how you can use this configuration if you're using the new format: [@eslint/eslintrc](https://www.npmjs.com/package/@eslint/eslintrc).

### Errors when using `@typescript-eslint`

Sometimes, errors with using `@typescript-eslint` are caused by version mismatch with other configuration files installed.

There is a known issue with `eslint-config-next` causing the linting to fail. This is because the package is using the v5 version of `@typescript-eslint`. Since this package is in v6, there are a lot breaking changes.

As a temporary fix, you can add an `overrides` key in your `package.json` and use the **v6** version of the plugin.

```json
{
  "overrides": {
    "eslint-config-next": {
      "@typescript-eslint/eslint-plugin": "6.1.0",
      "@typescript-eslint/parser": "6.1.0"
    }
  }
}
```
