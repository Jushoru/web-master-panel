import withNuxt from './.nuxt/eslint.config.mjs'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt([
  prettierConfig,
  {
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'vue/html-button-has-type': 'error',
    },
  },
])
