module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 'off', // Does not work correctly in Windows.

    'arrow-parens': 'off', // Not compatible with prettier
    'object-curly-newline': 'off', // Not compatible with prettier
    'no-mixed-operators': 'off', // Not compatible with prettier
    'arrow-body-style': 'off',
    'function-paren-newline': 'off', // Not compatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Not compatible with prettierr

    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb allows some borderline cases
    'no-console': 'error', // airbnb uses a warning
    'no-alert': 'error', // airbnb uses a warning

    'no-param-reassign': 'off',
    radix: 'off', // parseInt, parseFloat, and radix are disabled. I don't like it.

    'react/require-default-props': 'off', // airbnb uses error notification
    'react/forbid-prop-types': 'off', // airbnb uses error notification
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb used .jsx

    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // for the error of nested htmlFor properties of label elements

    'prettier/prettier': ['error'],
  },
};
