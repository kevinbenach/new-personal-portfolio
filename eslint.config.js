import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import astro from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.{js,ts,astro}'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'astro/no-unused-css-selector': 'warn',
    },
  },
];