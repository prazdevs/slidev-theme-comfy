import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  attributify: { prefix: 'w:' },
  shortcuts: {
    'boxed': 'shadow-border shadow-primary transform -translate-x-3px -translate-y-3px',
    'boxed-xl': 'shadow-border-xl shadow-primary transform -translate-x-7px -translate-y-7px',
    'underlined': 'underline decoration-primary decoration-4',

  },
  theme: {
    extend: {
      fontFamily: {
        serif: 'Rammetto One',
        sans: 'Atkinson Hyperlegible',
        mono: 'Mononoki',
      },
      boxShadow: {
        'border': '0 0 0 2px var(--slidev-theme-primary), 6px 6px 0 0 var(--slidev-theme-primary)',
        'border-xl': '0 0 0 2px var(--slidev-theme-primary), 14px 14px 0 0 var(--slidev-theme-primary)',
      },
      colors: {
        primary: 'var(--slidev-theme-primary)',
        base: {
          light: 'var(--ctp-latte-base)',
          dark: 'var(--ctp-mocha-base)',
        },
        text: {
          light: 'var(--ctp-latte-text)',
          dark: 'var(--ctp-mocha-text)',
        }
      },
    },
  },
}))
