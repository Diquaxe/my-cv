<script setup>
import { useI18n } from 'vue-i18n'

defineProps({ items: Array })
const { t: $t } = useI18n()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-xs font-semibold uppercase tracking-widest mb-6" style="color: var(--color-label-tertiary);">
      {{ $t('sections.contact') }}
    </h2>
    <div class="flex flex-col gap-3">
      <div v-for="(item, i) in items" :key="i" class="flex flex-col md:flex-row gap-2">
        <div class="md:min-w-[180px] text-sm shrink-0" style="color: var(--color-label-tertiary);">
          {{ item.label }}
        </div>
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm transition-colors duration-300 inline-flex items-center gap-1"
          style="color: var(--color-label-primary);"
          @mouseenter="$event.currentTarget.style.color='var(--color-accent)'"
          @mouseleave="$event.currentTarget.style.color='var(--color-label-primary)'"
        >
          {{ item.value }}
        </a>
      </div>
    </div>
  </section>
</template>
