# @cyrilolanolan/eslint-config-ts

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
