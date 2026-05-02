<script setup>
defineProps({
  period: String,
  title: String,
  company: String,
  url: String,
  location: String,
  description: [String, Array],
  link: Object,
})
</script>

<template>
  <div class="mb-9">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
      <div class="flex flex-wrap items-center gap-2">
        <a
          v-if="url"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-primary transition-colors duration-300"
        >
          {{ company }}
        </a>
        <span v-else class="font-medium text-primary">
          {{ company }}
        </span>

        <span
          v-if="title"
          class="text-secondary"
        >
          · {{ title }}
        </span>
      </div>

      <span class="text-sm text-tertiary mb-2 sm:mb-0 shrink-0">{{ period }}</span>
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
      class="inline-block text-sm mt-2 hover:underline transition-colors duration-300"
    >
      {{ link.label }}
    </a>
  </div>
</template>
