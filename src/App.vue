<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'
import profile from './data/profile.json'
import { useGeoLang } from './composables/useGeoLang.js'

onMounted(() => {
  useGeoLang()

  if (/^#[0-9A-Fa-f]{6}$/.test(profile.accentColor)) {
    document.documentElement.style.setProperty('--color-accent', profile.accentColor)
  }

  const saved = localStorage.getItem('theme')
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved)
  }
})
</script>

<template>
  <ThemeToggle />
  <RouterView v-slot="{ Component }">
    <Transition
      name="fade"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
