# @cyrilolanolan/eslint-config-ts

## 0.2.2

### Patch Changes

- c7cc1a1: Bumped dependencies to latest minor versions

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

  ## `@cyrilolanolan/eslint-config-ts`

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
