<template>
  <div class="block">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.block {
  max-width: calc(var(--layout-width) + (var(--layout-indent) * 2));
  padding-right: var(--layout-indent);
  padding-left: var(--layout-indent);
  margin: 0 auto;
  width: 100%;
  z-index: 1;
}
</style>
