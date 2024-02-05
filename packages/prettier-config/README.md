# @cyrilolanolan/eslint-config-ts

_[Prettier](https://prettier.io/) configuration for formatting code_

This combines defaults with personal style choices to write clean, readable, and consistent codes across all projects.

## Installation

1. Install the package with its peer dependencies:

   ```bash
   npm i -D @cyrilolanolan/prettier-config prettier
   ```

2. Extend this configuration by using any of these methods:

   In your [Prettier Configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) (preferred):

   ```js
   // .prettierrc.js
   const sharedConfig = require('@cyrilolanolan/prettier-config');

   module.exports = {
     ...sharedConfig,
     // extend or overwrite options here
   };
   ```

   or if you're using a `JSON` config:

   ```json
   "@cyrilolanolan/prettier-config"
   ```

   or add `prettier` key inside your `package.json`:

   ```json
   {
     "prettier": "@cyrilolanolan/prettier-config"
   }
   ```

## Configurations

This package extends the handful default [Prettier Options](https://prettier.io/docs/en/options.html) and the following API overrides:

| rule                 | value |
| -------------------- | ----- |
| singleQuote          | true  |
| tabWidth (for \*.py) | 4     |
| trailingComma        | "es5" |

## ⚠️ Gotcha!

### Extending via `package.json` or any `JSON` config

These methods do **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. To do that, you have to refer to the first installation method (using `.prettierrc.js`).
