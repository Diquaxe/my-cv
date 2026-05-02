<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  role: String,
  avatar: String,
})

const imgError = ref(false)
</script>

<template>
  <header class="mb-10">
    <div class="flex items-start justify-between gap-6 mb-3">
      <div class="flex items-center gap-6">
      <img
        v-if="avatar && !imgError"
        :src="avatar"
        :alt="name"
        class="w-[72px] h-[72px] rounded-full object-cover"
        @error="imgError = true"
      >
      <div
        v-else
        class="w-[72px] h-[72px] rounded-full flex items-center justify-center text-lg font-medium"
        style="background: var(--color-accent); color: #fff;"
      >
        {{ name?.charAt(0) }}
      </div>
      <div>
        <h1 class="text-xl font-semibold leading-tight mb-2 text-primary">
          {{ name }}
        </h1>
        <p class="text-sm text-tertiary">
          {{ role }}
        </p>
      </div>
    </div>
    <slot />
  </div>
  </header>
</template>
