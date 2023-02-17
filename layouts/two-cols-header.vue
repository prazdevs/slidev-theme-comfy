<template>
  <Themeify class="slidev-layout two-cols" w:w="full" w:h="full">
    <div w:grid="col-span-2">
      <slot />
    </div>
    <div w:grid="~ cols-2 gap-5">
      <div class="col-left">
        <slot name="left" />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </Themeify>
</template>
