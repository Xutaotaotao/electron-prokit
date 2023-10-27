// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:regexp/recommended',
  ],
  ignorePatterns: ['packages/create-vite/template-**'],
  plugins: ['import', 'regexp','react-refresh'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  rules: {
    eqeqeq: ['warn', 'always', { null: 'never' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-debugger': ['error'],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-process-exit': 'off',
    'no-useless-escape': 'off',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],

    'n/no-process-exit': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': [
      'error',
      {
        // for try-catching yarn pnp
        allowModules: ['pnpapi', 'vite'],
        tryExtensions: ['.ts', '.js', '.jsx', '.tsx', '.d.ts'],
      },
    ],
    'n/no-extraneous-import': [
      'error',
      {
        allowModules: ['vite', 'less', 'sass', 'vitest', 'unbuild',"@jest/globals"],
      },
    ],
    'n/no-extraneous-require': [
      'error',
      {
        allowModules: ['vite'],
      },
    ],
    'n/no-deprecated-api': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-syntax': 'off',

    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'off', // TODO: we should turn this on in a new PR
    // '@typescript-eslint/explicit-module-boundary-types': [
    //   'error',
    //   { allowArgumentsExplicitlyTypedAsAny: true },
    // ],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // maybe we should turn this on in a new PR
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off', // conflicts with prettier
    '@typescript-eslint/no-inferrable-types': 'off',
    // '@typescript-eslint/no-unused-vars': 'off', // maybe we should turn this on in a new PR
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    // disable rules set in @typescript-eslint/stylistic v6 that wasn't set in @typescript-eslint/recommended v5 and which conflict with current code
    // maybe we should turn them on in a new PR
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',

    'import/no-duplicates': 'error',
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    'regexp/no-contradiction-with-assertion': 'error',
    'n/shebang': 'off',
    'n/no-unpublished-bin': 'off',
  },
  reportUnusedDisableDirectives: true,
 
})