<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper'

defineProps<{
  image: string
}>()
</script>

<template>
  <Themeify
    class="slidev-layout"
    :style="handleBackground(image)"
    w:w="full"
    w:h="full"
  >
    <slot />
  </Themeify>
</template>
