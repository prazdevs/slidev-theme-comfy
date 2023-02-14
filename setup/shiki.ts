import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => ({
  theme: {
    dark: await loadTheme(require.resolve('./mocha.json')),
    light: await loadTheme(require.resolve('./latte.json')),
  },
}))
