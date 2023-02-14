<template>
  <Themeify class="p-10">
    <div
      w:shadow="border-xl primary"
      w:flex="~ col items-center justify-evenly"
      w:align="items-center"
      w:justify="evenly"
      w:transform="~ -translate-x-7px -translate-y-7px"
      w:p="10"
      w:w="full"
      w:h="full"
    >
      <div w:font="title leading-relaxed" w:text="7xl center">
        <slot />
      </div>
      <div w:text="3xl center">
        <slot name="subtitle" />
      </div>
    </div>
  </Themeify>
</template>
