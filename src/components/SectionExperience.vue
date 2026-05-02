<script setup>
import ExperienceItem from './ExperienceItem.vue'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'
import { tKey } from '@/utils/tKey.js'

defineProps({ items: Array })
const { locale } = useLocale()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xl font-semibold leading-tight mb-6 text-primary">
      {{ tKey('sections.experience', locale) }}
    </h2>
    <ExperienceItem
      v-for="item in items"
      :key="item.id"
      :period="t(item.period, locale)"
      :title="t(item.title, locale)"
      :company="item.company"
      :url="item.url"
      :location="t(item.tagline, locale)"
      :description="t(item.summary, locale)"
      :companyLink="item.url && item.links?.[0] ? { url: item.url, label: t(item.links[0].label, locale) } : null"
    />
  </section>
</template>
