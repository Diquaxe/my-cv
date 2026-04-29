<script setup>
defineProps({ about: String })
</script>

<template>
  <section class="mb-10">
    <p class="text-sm leading-relaxed" style="color: var(--color-label-secondary); line-height: var(--leading-base);">
      {{ about }}
    </p>
  </section>
</template>
