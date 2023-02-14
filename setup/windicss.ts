import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
import { labels } from '@catppuccin/palette'

const catColor = (c: keyof typeof labels) => ({
  light: labels[c].latte.hex,
  dark: labels[c].mocha.hex,
})
const colors = {
  rosewater: catColor('rosewater'),
  flamingo: catColor('flamingo'),
  pink: catColor('pink'),
  mauve: catColor('mauve'),
  red: catColor('red'),
  maroon: catColor('maroon'),
  peach: catColor('peach'),
  yellow: catColor('yellow'),
  green: catColor('green'),
  teal: catColor('teal'),
  sky: catColor('sky'),
  sapphire: catColor('sapphire'),
  blue: catColor('blue'),
  lavender: catColor('lavender'),
  text: catColor('text'),
  base: catColor('base'),
}

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  attributify: { prefix: 'w:' },
  shortcuts: {
    // 'bg-main': 'bg-crust-light text-text-light dark:(bg-crust-dark text-text-dark)',
  },
  theme: {
    extend: {
      fontFamily: {
        title: 'Rammetto One',
      },
      boxShadow: {
        'border': '0 0 0 2px var(--slidev-theme-primary), 6px 6px 0 0 var(--slidev-theme-primary)',
        'border-xl': '0 0 0 2px var(--slidev-theme-primary), 14px 14px 0 0 var(--slidev-theme-primary)',
      },
      colors: {
        ...colors,
        primary: 'var(--slidev-theme-primary)',
      },
    },
  },
}))
