<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  period: String,
  title: String,
  company: String,
  url: String,
  workUrl: String,
  location: String,
  description: String,
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
          {{ title }}
        </RouterLink>
        <span v-else class="font-medium" style="color: var(--color-label-primary);">
          {{ title }}
        </span>

        <span v-if="company" style="color: var(--color-label-secondary);">
          · {{ company }}
        </span>

        <a
          v-if="url"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center transition-colors duration-300"
          style="color: var(--color-label-tertiary);"
          @mouseenter="$event.currentTarget.style.color='var(--color-accent)'"
          @mouseleave="$event.currentTarget.style.color='var(--color-label-tertiary)'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      <p v-if="location" class="text-sm mb-1" style="color: var(--color-label-tertiary);">
        {{ location }}
      </p>

      <p class="text-sm leading-relaxed" style="color: var(--color-label-secondary);">
        {{ description }}
      </p>
    </div>
  </div>
</template>
