export const usePageUrl = () => {
  const route = useRoute()
  const config = useRuntimeConfig()

  return computed(() => `${config.public.siteUrl}${route.path}`)
}
