<script setup>
import { ref, onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale.js'

const isDark = ref(true)
const { locale, toggleLocale } = useLocale()

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved !== 'light'
})

function toggle() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', isDark.value ? '' : 'light')
  localStorage.setItem('theme', theme)
}
</script>

<template>
  <div class="fixed top-5 right-5 z-50 flex items-center" style="gap: 8px;">
    <button
      @click="toggleLocale"
      class="p-2 rounded-full transition-colors duration-300"
      style="color: var(--color-label-tertiary); background: transparent; font-size: 13px; font-weight: 500; line-height: 1;"
      :title="locale === 'ru' ? 'Switch to English' : 'Переключить на русский'"
    >
      {{ locale === 'ru' ? 'RU' : 'EN' }}
    </button>
    <button
      @click="toggle"
      class="p-2 rounded-full transition-colors duration-300"
      style="color: var(--color-label-tertiary); background: transparent;"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
button:hover {
  color: var(--color-accent) !important;
}
</style>
