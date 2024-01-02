module.exports = {
  globals: {
    __dirname: true,
  },
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/*'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': ['error', { props: true }],
    'import/no-unresolved': 0,
    'import/extensions': 2,
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    '@typescript-eslint/lines-between-class-members': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'react/prop-types': 0,
    'react/jsx-max-props-per-line': [1, { maximum: { single: 2, multi: 1 } }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    '@next/next/no-html-link-for-pages': 0,
  },
};
