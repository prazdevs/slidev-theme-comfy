<template>
  <Themeify
    class="slidev-layout fact"
    w:grid="~"
    w:place="content-center"
    w:text="center"
  >
    <slot />
  </Themeify>
</template>

<style>
.slidev-layout.fact h1 {
  color: var(--slidev-theme-primary);
}
</style>
