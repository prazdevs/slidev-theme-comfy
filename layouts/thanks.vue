<template>
  <Themeify class="slidev-layout end">
    <div
      class="boxed-xl"
      w:flex="~ col items-center justify-evenly"
      w:align="items-center"
      w:justify="evenly"
      w:p="10"
      w:w="full"
      w:h="full"
    >
      <div w:font="serif leading-relaxed" w:text="7xl center" w:mb="0">
        <slot />
      </div>
      <div w:flex="~" w:gap="7">
        <slot name="socials" />
      </div>
    </div>
  </Themeify>
</template>
