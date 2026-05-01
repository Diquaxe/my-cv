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
    <h2 class="text-xl font-semibold leading-tight mb-6" style="color: #fff;">
      {{ $t('sections.languages') }}
    </h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(item, i) in items"
        :key="i"
        class="text-sm px-3 py-1 rounded-full text-secondary"
        style="border: 1px solid var(--color-border, rgba(255,255,255,0.12)); background: rgba(255,255,255,0.04);"
      >
        {{ t(item, locale) }}
      </span>
    </div>
  </section>
</template>
