<script setup>
import { useI18n } from 'vue-i18n'

defineProps({ items: Array })
const { t: $t } = useI18n()

function isSafeUrl(url) {
  if (typeof url !== 'string') return false
  return /^(https?:|mailto:|tel:)/.test(url)
}
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xs font-semibold uppercase tracking-widest mb-6 text-tertiary">
      {{ $t('sections.contact') }}
    </h2>
    <div class="flex flex-col gap-3">
      <div v-for="(item, i) in items" :key="i" class="flex flex-col md:flex-row gap-2">
        <div class="md:min-w-[180px] text-sm shrink-0 text-tertiary">
          {{ item.label }}
        </div>
        <a
          v-if="isSafeUrl(item.url)"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-primary transition-colors duration-300"
        >
          {{ item.value }}
        </a>
        <span v-else class="text-sm text-secondary">
          {{ item.value }}
        </span>
      </div>
    </div>
  </section>
</template>
