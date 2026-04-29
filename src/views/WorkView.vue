<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import profile from '../data/profile.json'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'

const { t: $t } = useI18n()
const route = useRoute()
const { locale } = useLocale()

const item = computed(() => profile.experience.find(e => e.id === route.params.id))

watchEffect(() => {
  const n = t(profile.name, locale.value)
  document.title = item.value ? `${n} — ${item.value.company}` : n
})
</script>

<template>
  <main class="mx-auto px-4 sm:px-0 my-20" style="max-width: var(--max-width);">
    <div v-if="item">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 mb-10 text-sm" style="color: var(--color-label-tertiary);">
        <RouterLink to="/" class="transition-colors duration-300 hover:text-[var(--color-accent)]" style="color: var(--color-label-tertiary);">
          {{ $t('nav.back') }}
        </RouterLink>
        <span style="color: var(--color-accent);">›</span>
        <span style="color: var(--color-label-secondary);">{{ item.company }}</span>
      </nav>

      <!-- Header -->
      <div class="mb-10">
        <h1 class="text-2xl font-semibold mb-1" style="color: var(--color-label-primary);">
          {{ t(item.title, locale) }}
        </h1>
        <div class="flex flex-wrap gap-3 text-sm" style="color: var(--color-label-tertiary);">
          <span>{{ item.company }}</span>
          <span>·</span>
          <span>{{ t(item.period, locale) }}</span>
          <span v-if="item.location">·</span>
          <span v-if="item.location">{{ t(item.location, locale) }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-10">
        <p class="text-sm leading-relaxed" style="color: var(--color-label-secondary); line-height: var(--leading-base);">
          {{ t(item.description, locale) }}
        </p>
      </div>

      <!-- Achievements -->
      <div v-if="item.achievements?.length" class="mb-10">
        <h2 class="text-xs font-semibold uppercase tracking-widest mb-4" style="color: var(--color-label-tertiary);">
          {{ $t('work.highlights') }}
        </h2>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(ach, i) in item.achievements"
            :key="i"
            class="flex gap-3 text-sm"
            style="color: var(--color-label-secondary);"
          >
            <span class="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full" style="background: var(--color-accent);"></span>
            {{ ach }}
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
        />
      </div>

      <!-- Links -->
      <div v-if="item.links?.length" class="mb-10">
        <h2 class="text-xs font-semibold uppercase tracking-widest mb-4" style="color: var(--color-label-tertiary);">
          {{ $t('work.links') }}
        </h2>
        <div class="flex flex-col gap-2">
          <a
            v-for="(link, i) in item.links"
            :key="i"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm inline-flex items-center gap-1.5 transition-colors duration-300"
            style="color: var(--color-label-primary);"
            @mouseenter="$event.currentTarget.style.color='var(--color-accent)'"
            @mouseleave="$event.currentTarget.style.color='var(--color-label-primary)'"
          >
            {{ t(link.label, locale) }}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-sm" style="color: var(--color-label-tertiary);">
      {{ $t('notFound') }} <RouterLink to="/" style="color: var(--color-accent);">{{ $t('nav.back') }}</RouterLink>
    </div>
  </main>
</template>
