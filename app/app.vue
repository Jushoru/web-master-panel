<script setup lang="ts">
const pageUrl = usePageUrl()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: pageUrl.value,
    },
  ],
}))

useSeoMeta({
  ogUrl: () => pageUrl.value,
})
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#ЦВЕТ_БРЕНДА" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
