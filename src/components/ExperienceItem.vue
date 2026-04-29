<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  period: String,
  title: String,
  company: String,
  url: String,
  workUrl: String,
  location: String,
  description: [String, Array],
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-2 mb-9">
    <div class="md:min-w-[180px] text-sm shrink-0" style="color: var(--color-label-tertiary);">
      {{ period }}
    </div>
    <div class="flex-1">
      <div class="flex flex-wrap items-center gap-2 mb-1">
        <RouterLink
          v-if="workUrl"
          :to="workUrl"
          class="font-medium transition-colors duration-300 text-[var(--color-label-primary)] hover:text-[var(--color-accent)]"
        >
          {{ company }}
        </RouterLink>
        <span v-else class="font-medium" style="color: var(--color-label-primary);">
          {{ company }}
        </span>

        <span v-if="title" style="color: var(--color-label-secondary);">
          · {{ title }}
        </span>
      </div>

      <p v-if="location" class="text-sm mb-1" style="color: var(--color-label-tertiary);">
        {{ location }}
      </p>

      <ul v-if="Array.isArray(description)" class="text-sm leading-relaxed list-disc list-inside" style="color: var(--color-label-secondary);">
        <li v-for="(item, i) in description" :key="i">{{ item }}</li>
      </ul>
      <p v-else class="text-sm leading-relaxed" style="color: var(--color-label-secondary);">
        {{ description }}
      </p>
    </div>
  </div>
</template>
