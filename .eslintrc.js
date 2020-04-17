module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'react-hooks',
    'graphql',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-state': 'off',
    'no-restricted-globals': 'off',
    'no-useless-constructor': 'off',
    'react/jsx-boolean-value': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-console': 1,
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/default': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
    // 'graphql/named-operations': [
    //   'warn',
    //   { schemaJson: require('./schema.json') },
    // ],
    // 'graphql/required-fields': [
    //   'error',
    //   {
    //     schemaJson: require('./schema.json'),
    //     requiredFields: ['id'],
    //   },
    // ],
    // 'graphql/no-deprecated-fields': [
    //   'warn',
    //   {
    //     schemaJson: require('./schema.json'),
    //   },
    // ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '**/testUtils.tsx', 'src/jest/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // typescript: {
      //   alwaysTryTypes: true,
      // },
    },
  },
};
