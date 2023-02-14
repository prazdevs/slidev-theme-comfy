<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <Themeify w:p="y-10 x-30">
    <div
      w:h="full"
      w:flex="~"
      w:justify="space-around"
      w:align="items-center"
    >
      <div w:w="1/2">
        <img
          :src="image"
          class="boxed-xl"
          w:object="cover"
          w:w="250px"
          w:h="300px"
        >
      </div>
      <div w:w="1/2" w:text="left">
        <div w:text="2xl" w:font="leading-loose">
          <slot />
        </div>
      </div>
    </div>
  </Themeify>
</template>
