# @cyrilolanolan/prettier-config

## 0.2.1

### Patch Changes

- 5b0c692: Fix no-restricted-imports accidentally including hidden files

## 0.2.0

### Minor Changes

- 4f4009f: Added eslint-import-resolver-typescript to resolve paths defined in tsconfig

## 0.1.3

### Patch Changes

- 0dc5e66: Bumped dependencies to latest versions
- 71d7927: Fixed peerDependencies restrictions

  - Removed upper boundary restriction for TypeScript as this causes unmet peer dependencies
  - Changed eslint restriction from `<9` to `<9.0.0` because it's not working

- 0dc5e66: Bumped packages and fixed peerDependencies restrictions

## 0.1.2

### Patch Changes

- 0f53626: Upgraded dependencies to latest versions
- 1d515bd: Updated installation instruction for eslint-config-ts
- ee70c03: Updated installation instruction for prettier-config
- a6e61ba: Upgraded dependencies to latest versions

## 0.1.1

### Patch Changes

- 1fc8a0a: Dependencies bumped to latest versions

## 0.1.0

### Minor Changes

- 48755c1: # Initial configurations

  ## `@cyrilolanolan/prettier-config`

  | rule                 | value |
  | -------------------- | ----- |
  | singleQuote          | true  |
  | tabWidth (for \*.py) | 4     |
  | trailingComma        | "es5" |
