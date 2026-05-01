<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import profile from '../data/profile.json'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'
import { tKey } from '@/utils/tKey.js'

const route = useRoute()
const { locale } = useLocale()

const item = computed(() => profile.experience.find(e => e.id === route.params.id))

watchEffect(() => {
  const n = t(profile.name, locale.value)
  document.title = item.value ? `${n} — ${item.value.company}` : n
})
</script>

<template>
  <main
    class="mx-auto px-4 sm:px-0 my-20"
    style="max-width: var(--max-width);"
  >
    <div v-if="item">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 mb-10 text-sm text-tertiary">
        <RouterLink
          to="/"
          class="transition-colors duration-300 text-tertiary hover:text-[var(--color-accent)]"
        >
          {{ tKey('nav.back', locale.value) }}
        </RouterLink>
        <span style="color: var(--color-accent);">›</span>
        <span class="text-secondary">{{ item.company }}</span>
      </nav>

      <!-- Header -->
      <div class="mb-10">
        <h1 class="text-2xl font-semibold mb-1 text-primary">
          {{ item.company }}
        </h1>
        <div class="flex flex-wrap gap-3 text-sm text-tertiary">
          <span>{{ t(item.title, locale) }}</span>
          <span>·</span>
          <span>{{ t(item.period, locale) }}</span>
          <span v-if="item.location">·</span>
          <span v-if="item.location">{{ t(item.location, locale) }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-10">
        <p
          class="text-sm text-secondary"
          style="line-height: var(--leading-base);"
        >
          {{ t(item.description, locale) }}
        </p>
      </div>

      <!-- Achievements -->
      <div
        v-if="item.achievements?.length"
        class="mb-10"
      >
        <!-- <h2 class="text-xs font-semibold uppercase tracking-widest mb-4 text-tertiary">
          {{ $t('work.highlights') }}
        </h2> -->
        <ul class="flex flex-col gap-2">
          <li
            v-for="(ach, i) in item.achievements"
            :key="i"
            class="flex gap-3 text-sm text-secondary"
          >
            <span
              class="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full"
              style="background: var(--color-accent);"
            />
            {{ t(ach, locale) }}
          </li>
        </ul>
      </div>

      <!-- Images -->
      <div
        v-if="item.images?.length"
        class="grid gap-3 mb-10"
        :class="item.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'"
      >
        <img
          v-for="(img, i) in item.images"
          :key="i"
          :src="img"
          loading="lazy"
          class="w-full rounded-lg object-cover"
          style="border: 1px solid rgba(255,255,255,0.08);"
        >
      </div>

      <!-- Links -->
      <div
        v-if="item.links?.length"
        class="mb-10"
      >
        <h2 class="text-xs font-semibold uppercase tracking-widest mb-4 text-tertiary">
          {{ tKey('work.links', locale.value) }}
        </h2>
        <div class="flex flex-col gap-2">
          <a
            v-for="(link, i) in item.links"
            :key="i"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-primary transition-colors duration-300"
          >
            {{ t(link.label, locale) }}
          </a>
        </div>
      </div>
    </div>

    <div
      v-else
      class="text-sm text-tertiary"
    >
      {{ tKey('notFound', locale.value) }}
      <RouterLink
        to="/"
        style="color: var(--color-accent);"
      >
        {{ tKey('nav.back', locale.value) }}
      </RouterLink>
    </div>
  </main>
</template>
