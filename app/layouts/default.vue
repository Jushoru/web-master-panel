<template>
  <div class="default">
    <AppHeader />
    <main id="content" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.default {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
