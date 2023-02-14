import { ref } from 'vue'

export const useRandomTheme = () => {
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
  const current = ref('')

  const shuffle = () => {
    const themes = colors.filter(c => c !== current.value)
    current.value = themes[Math.floor(Math.random() * themes.length)]
  }

  shuffle()

  return {
    current, shuffle,
  }
}
