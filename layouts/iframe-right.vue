<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  url: string
  scale?: number
}>()

const percent = computed(() => `${1 / (props.scale || 1) * 100}%`)
</script>

<template>
  <div w:grid="~ cols-2" w:w="full" w:h="full">
    <Themeify
      class="slidev-layout iframe-right"
      w:border="primary r-2"
    >
      <slot />
    </Themeify>
    <div

      w:relative :style="{ width: percent, height: percent }"
    >
      <iframe
        id="frame"
        :src="url"
        w:w="full"
        w:h="full"
        :style="scale ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}"
      />
    </div>
  </div>
</template>
