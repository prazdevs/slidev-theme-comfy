import { computed } from 'vue'

const colors = [
  'rosewater',
  'flamingo',
  'pink',
  'mauve',
  'red',
  'maroon',
  'peach',
  'yellow',
  'green',
  'teal',
  'sky',
  'sapphire',
  'blue',
  'lavender',
]

export const useRandomTheme = () => ({
  current: computed(() => colors[Math.floor(Math.random() * colors.length)]),
})
