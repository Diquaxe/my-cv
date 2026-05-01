<script setup>
defineProps({ about: String })
</script>

<template>
  <section class="mb-10">
    <p
      class="text-sm text-secondary"
      style="line-height: var(--leading-base);"
    >
      {{ about }}
    </p>
  </section>
</template>
