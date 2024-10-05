# @cyrilolanolan/eslint-config-ts

ESLint configuration for _TypeScript_ projects

This configuration encourages best practices by using a set of rules for consistent and high-quality coding across all projects.

- ✨ [Prettier](https://prettier.io/) for code formatting
- ✨ Supports linting for [React](https://reactjs.org/)
- ✨ Uses [TailwindCSS](https://tailwindcss.com/) for styling

## Installation

1. Install the package with its peer dependencies:

   ```bash
   npm i -D @cyrilolanolan/eslint-config-react-tw tailwindcss eslint prettier
   ```

2. Extend the configuration.

   In your [ESLint Configuration](https://eslint.org/docs/user-guide/configuring) (preferred):

   ```js
   module.exports = {
     extends: ['@cyrilolanolan/react-tw'],
     // other configurations here
   };
   ```

   or add `eslintConfig` key in your `package.json`:

   ```json
   {
     "eslintConfig": {
       "extends": "@cyrilolanolan/react-tw"
     }
   }
   ```

## Configurations

This package uses the following recommended configurations:

- ✔️ [tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)/recommended
- ✔️ [prettier](https://github.com/prettier/eslint-plugin-prettier)/recommended
- ✔️ [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)/recommended

### React

- `react/self-closing-comp` - enforce self-closing component when there's no children

### TailwindCSS

- `tailwindcss/no-custom-classname` - disallow custom classes not defined in TailwindCSS configuration

## ⚠️ Gotchas

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
