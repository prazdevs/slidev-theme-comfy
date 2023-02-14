<script setup lang="ts">
interface Social {
  label: string
  link: string
}

defineProps<{
  github?: Social
  mastodon?: Social
  twitter?: Social
}>()
</script>

<template>
  <Themeify w:p="10">
    <div
      class="boxed-xl"
      w:flex="~ col items-center justify-evenly"
      w:align="items-center"
      w:justify="evenly"
      w:p="10"
      w:w="full"
      w:h="full"
    >
      <h1 w:font="leading-relaxed" w:text="7xl center" w:mb="0">
        <slot />
      </h1>
      <div w:flex="~" w:gap="7">
        <!-- <Social v-if="github">
          <template #icon>
            <openmoji-github />
          </template>
          <a :href="github.link">{{ github.label }}</a>
        </Social>
        <Social v-if="twitter">
          <template #icon>
            <openmoji-twitter />
          </template>
          <a :href="twitter.link">{{ twitter.label }}</a>
        </Social>
        <Social v-if="mastodon">
          <template #icon>
            <openmoji-mastodon />
          </template>
          <a :href="mastodon.link">{{ mastodon.label }}</a>
        </Social> -->
        <slot name="socials" />
      </div>
    </div>
  </Themeify>
</template>
