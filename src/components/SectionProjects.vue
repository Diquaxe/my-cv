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
      {{ tKey('sections.projects', locale.value) }}
    </h2>
    <ExperienceItem
      v-for="item in items"
      :key="item.id"
      :period="t(item.period, locale)"
      :company="t(item.title, locale)"
      :url="item.url"
      :description="t(item.description, locale)"
      :link="item.caseUrl ? { url: item.caseUrl, label: t(item.caseLabel, locale) } : null"
    />
  </section>
</template>
