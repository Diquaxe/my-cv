<script setup>
import { useLocale } from '@/composables/useLocale.js'
import { tKey } from '@/utils/tKey.js'

defineProps({ items: Array })
const { locale } = useLocale()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xl font-semibold leading-tight mb-6 text-primary">
      {{ tKey('sections.skills', locale) }}
    </h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(skill, i) in items"
        :key="i"
        class="text-sm px-3 py-1 rounded-full text-secondary"
        style="border: 1px solid var(--color-border); background: var(--color-badge-bg);"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
