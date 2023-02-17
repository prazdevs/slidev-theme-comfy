<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper'

defineProps<{
  image: string
}>()
</script>

<template>
  <div w:grid="~ cols-2 auto-rows-fr" w:w="full">
    <Themeify
      class="slidev-layout image-right"
      w:border="primary r-2"
    >
      <slot />
    </Themeify>
    <div w:w="full" :style="handleBackground(image)" />
  </div>
</template>
