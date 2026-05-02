<script setup>
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'
import { tKey } from '@/utils/tKey.js'

defineProps({ items: Array })
const { locale } = useLocale()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xl font-semibold leading-tight mb-6 text-primary">
      {{ tKey('sections.education', locale) }}
    </h2>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="mb-9"
    >
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <p class="font-medium text-primary">
          {{ t(item.degree, locale) }}
        </p>
        <span class="text-sm text-tertiary mb-2 sm:mb-0 shrink-0">{{ t(item.period, locale) }}</span>
      </div>
      <p class="text-sm text-secondary">
        {{ t(item.school, locale) }}
      </p>
    </div>
  </section>
</template>
