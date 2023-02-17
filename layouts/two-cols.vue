<template>
  <Themeify
    class="slidev-layout two-cols"
    w:w="full"
    w:h="full"
    w:grid="~ cols-2 gap-5"
  >
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </themeify>
</template>
