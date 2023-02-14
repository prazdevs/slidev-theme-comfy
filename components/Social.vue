<template>
  <span w:flex="~" w:align="items-center" w:justify="center">
    <span w:mt="2" w:text="3xl">
      <slot name="icon" />
    </span>
    <span class="underlined-xl" w:text="2xl">
      <slot />
    </span>
  </span>
</template>
