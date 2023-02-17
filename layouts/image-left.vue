<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper'

defineProps<{
  image: string
}>()
</script>

<template>
  <div w:grid="~ cols-2 auto-rows-fr" w:w="full">
    <div w:w="full" :style="handleBackground(image)" />
    <Themeify
      class="slidev-layout image-left"
      w:border="primary l-2"
    >
      <slot />
    </Themeify>
  </div>
</template>
