module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    /**
     * Enforce self-closing component when there's no children
     */
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
