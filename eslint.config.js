import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

const browserGlobals = {
  window: 'readonly', document: 'readonly', navigator: 'readonly',
  location: 'readonly', history: 'readonly', console: 'readonly',
  localStorage: 'readonly', sessionStorage: 'readonly',
  fetch: 'readonly', AbortController: 'readonly',
  setTimeout: 'readonly', clearTimeout: 'readonly',
  setInterval: 'readonly', clearInterval: 'readonly',
  Event: 'readonly', HTMLElement: 'readonly', MutationObserver: 'readonly',
}

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: browserGlobals,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
