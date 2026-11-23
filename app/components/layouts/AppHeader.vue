<script setup lang="ts"></script>

<template>
  <header class="header">
    <a href="#content" class="header__skip-link">Перейти к содержимому</a>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;

  &__skip-link {
    position: absolute;
    top: -100px;
    left: 12px;
    z-index: 2000;
    background-color: var(--color-accent);
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-size: var(--text-xxs);
    font-weight: 600;
    transition: top 0.2s ease;

    &:focus-visible {
      top: 12px;
    }
  }
}
</style>
