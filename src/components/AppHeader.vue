<script setup>
defineProps({
  name: String,
  role: String,
  avatar: String,
})
</script>

<template>
  <header class="mb-10">
    <div class="flex items-center gap-4 mb-3">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        class="w-20 h-20 rounded-full object-cover"
        style="border: 2px solid var(--color-label-tertiary);"
        @error="$event.target.style.display='none'"
      />
      <div
        v-else
        class="w-20 h-20 rounded-full flex items-center justify-center text-lg font-medium"
        style="background: var(--color-accent); color: #fff;"
      >
        {{ name?.charAt(0) }}
      </div>
      <div>
        <h1 class="text-xl font-semibold leading-tight" style="color: var(--color-label-primary);">
          {{ name }}
        </h1>
        <p class="text-sm" style="color: var(--color-label-tertiary);">{{ role }}</p>
      </div>
    </div>
  </header>
</template>
