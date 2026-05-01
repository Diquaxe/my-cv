<script setup>
defineProps({
  name: String,
  role: String,
  avatar: String,
})
</script>

<template>
  <header class="mb-10">
    <div class="flex items-center gap-6 mb-3">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        class="w-20 h-20 rounded-full object-cover"
        @error="$event.target.style.display='none'"
      >
      <div
        v-else
        class="w-20 h-20 rounded-full flex items-center justify-center text-lg font-medium"
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
  </header>
</template>
