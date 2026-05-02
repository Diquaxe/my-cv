<script setup>
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'

defineProps({ items: Array })
const { locale } = useLocale()

function isSafeUrl(url) {
  if (typeof url !== 'string') return false
  return /^(https?:|mailto:|tel:)/.test(url)
}
</script>

<template>
  <section class="mb-4">
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
      <template
        v-for="(item, i) in items"
        :key="i"
      >
        <span
          v-if="i > 0"
          class="text-tertiary select-none"
        >|</span>
        <a
          v-if="isSafeUrl(item.url)"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm hover:underline transition-colors duration-300"
        >
          {{ t(item.value, locale) }}
        </a>
        <span
          v-else
          class="text-sm text-secondary"
        >
          {{ t(item.value, locale) }}
        </span>
      </template>
    </div>
  </section>
</template>
