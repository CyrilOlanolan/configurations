---
'@cyrilolanolan/eslint-config-ts': patch
'@cyrilolanolan/prettier-config': patch
---

Fixed peerDependencies restrictions

- Removed upper boundary restriction for TypeScript as this causes unmet peer dependencies
- Changed eslint restriction from `<9` to `<9.0.0` because it's not working
