<script setup lang="ts">
import { useRandomTheme } from '../composables/randomTheme'

const { current } = useRandomTheme()
</script>

<template>
  <div
    :class="`theme-${current}`"
    w:w="full"
    w:h="full"
    w:text="text-light dark:text-dark"
    w:bg="base-light dark:base-dark"
  >
    <slot />
  </div>
</template>
