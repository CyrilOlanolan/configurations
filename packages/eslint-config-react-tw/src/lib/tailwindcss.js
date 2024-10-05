module.exports = {
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended', 'prettier'],
  rules: {
    /**
     * Warn if a class is used that is not defined in the Tailwind CSS configuration.
     */
    'tailwindcss/no-custom-classname': 'warn',
  },
};
