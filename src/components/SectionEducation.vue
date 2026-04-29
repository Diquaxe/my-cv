<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'

defineProps({ items: Array })
const { t: $t } = useI18n()
const { locale } = useLocale()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xs font-semibold uppercase tracking-widest mb-6" style="color: var(--color-label-tertiary);">
      {{ $t('sections.education') }}
    </h2>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="flex flex-col md:flex-row gap-2 mb-9"
    >
      <div class="md:min-w-[180px] text-sm shrink-0" style="color: var(--color-label-tertiary);">
        {{ t(item.period, locale) }}
      </div>
      <div class="flex-1">
        <p class="font-medium mb-0.5" style="color: var(--color-label-primary);">{{ t(item.degree, locale) }}</p>
        <p class="text-sm" style="color: var(--color-label-secondary);">{{ t(item.school, locale) }}</p>
      </div>
    </div>
  </section>
</template>
