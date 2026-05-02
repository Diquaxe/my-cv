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
          style="font-size: 14px;"
        >|</span>
        <a
          v-if="isSafeUrl(item.url)"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-sm hover:underline transition-colors duration-300"
        >
          {{ t(item.value, locale) }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"/>
          </svg>
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
