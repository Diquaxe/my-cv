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
  link: Object,
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-2 mb-9">
    <div class="md:min-w-[180px] text-sm shrink-0 text-tertiary">
      {{ period }}
    </div>
    <div class="flex-1">
      <div class="flex flex-wrap items-center gap-2 mb-1">
        <RouterLink
          v-if="workUrl"
          :to="workUrl"
          class="font-medium transition-colors duration-300 text-primary hover:text-[var(--color-accent)]"
        >
          {{ company }}
        </RouterLink>
        <span
          v-else
          class="font-medium text-primary"
        >
          {{ company }}
        </span>

        <span
          v-if="title"
          class="text-secondary"
        >
          · {{ title }}
        </span>
      </div>

      <p
        v-if="location"
        class="text-sm mb-1 text-tertiary"
      >
        {{ location }}
      </p>

      <ul
        v-if="Array.isArray(description)"
        class="text-sm leading-relaxed list-disc list-inside text-secondary mt-3"
      >
        <li
          v-for="(item, i) in description"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
      <p
        v-else
        class="text-sm leading-relaxed text-secondary"
      >
        {{ description }}
      </p>

      <a
        v-if="link?.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-sm mt-2 hover:underline transition-colors duration-300 text-primary"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>
