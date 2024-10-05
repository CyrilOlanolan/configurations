---
'@cyrilolanolan/eslint-config-react-tw': major
'@cyrilolanolan/eslint-config-ts': major
'@cyrilolanolan/prettier-config': major
---

Removed React rules from `eslint-config-ts` and added a separate package for it calles `eslint-config-react-tw`

**BREAKING CHANGE**

- Rules relating to React have been removed from `@cyrilolanolan/eslint-config-ts`
- New package for React and TailwindCSS ESLint configuration has been published: `@cyrilolanolan/eslint-config-react-tw`

**WHY THE CHANGE WAS MADE**

- To improve modularity and separation of concerns between TypeScript and React configurations.
- This allows developers to use @cyrilolanolan/eslint-config-ts without including React-specific rules when not working on React projects.
- It also provides a more tailored ESLint configuration for React projects that include TailwindCSS, ensuring compatibility and reducing unnecessary configuration for projects that use only TypeScript or React.

**HOW SHOULD YOU MIGRATE YOUR CODE**

- Upgrade `@cyrilolanolan/eslint-config-ts` to `v1`
- If you're using React and TailwindCSS, install `@cyrilolanolan/eslint-config-react-tw`
- Follow the [installation instructions](https://github.com/CyrilOlanolan/configurations/tree/main/packages/eslint-config-react-tw).
