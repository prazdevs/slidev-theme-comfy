<script setup lang="ts">
defineProps<{
  hello: string
  image: string
}>()
</script>

<template>
  <Themeify class="py-15 px-30">
    <div
      w:h="full"
      w:flex="~"
      w:justify="space-around"
      w:align="items-center"
    >
      <div w:w="1/2">
        <img
          :src="image"
          w:shadow="border-xl primary"
          w:transform="~ -translate-x-7px -translate-y-7px"
          w:object="cover"
          w:w="250px"
          w:h="300px"
        >
      </div>
      <div w:w="1/2" w:text="left">
        <div w:font="title" w:text="4xl" w:mb="6">
          {{ hello }}
        </div>
        <div w:text="2xl" w:font="leading-loose">
          <slot />
        </div>
      </div>
    </div>
  </Themeify>
</template>
