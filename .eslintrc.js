module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    import: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "array-callback-return": "error",
    "no-console": "error",
    "complexity": ["error", 4],
    "max-statements": ["error", 8],
    "max-statements-per-line": [
      "error",
      {
        "max": 1
      }
    ],
    "react/require-default-props": "warn",
    "max-nested-callbacks": ["error", 2],
    "max-lines": ["error", 150],
    "prefer-const": "error",
    "no-proto": 0,
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "import/no-unresolved": 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': "error"
  },
  parser: 'babel-eslint'
};
