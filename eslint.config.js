import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    ignores: ['dist/**'],
    rules: {},
    files: ['src/**/*.{ts,tsx}'],
  },
  eslintConfigPrettier,
];
