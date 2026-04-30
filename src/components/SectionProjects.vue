<script setup>
import { useI18n } from 'vue-i18n'
import ExperienceItem from './ExperienceItem.vue'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'

defineProps({ items: Array })
const { t: $t } = useI18n()
const { locale } = useLocale()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xs font-semibold uppercase tracking-widest mb-6 text-tertiary">
      {{ $t('sections.projects') }}
    </h2>
    <ExperienceItem
      v-for="item in items"
      :key="item.id"
      :period="t(item.period, locale)"
      :company="t(item.title, locale)"
      :url="item.url"
      :description="t(item.description, locale)"
    />
  </section>
</template>
