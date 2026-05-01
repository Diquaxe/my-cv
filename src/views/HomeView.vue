<script setup>
import { computed, watchEffect } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import SectionAbout from '../components/SectionAbout.vue'
import SectionExperience from '../components/SectionExperience.vue'
import SectionEducation from '../components/SectionEducation.vue'
import SectionProjects from '../components/SectionProjects.vue'
import SectionContact from '../components/SectionContact.vue'
import SectionSkills from '../components/SectionSkills.vue'
import SectionLanguages from '../components/SectionLanguages.vue'
import profile from '../data/profile.json'
import { useLocale } from '@/composables/useLocale.js'
import { t } from '@/utils/t.js'

const { locale } = useLocale()

const name = computed(() => t(profile.name, locale.value))
const role = computed(() => t(profile.role, locale.value))
const about = computed(() => t(profile.about, locale.value))

watchEffect(() => {
  document.title = name.value
})
</script>

<template>
  <main class="mx-auto px-4 sm:px-0 my-20" style="max-width: var(--max-width);">
    <Transition name="section" appear>
      <div>
        <AppHeader :name="name" :role="role" :avatar="profile.avatar" />
        <SectionContact :items="profile.contact" />
        <SectionAbout :about="about" />
        <SectionExperience :items="profile.experience" />
        <SectionProjects :items="profile.projects" />
        <SectionEducation :items="profile.education" />
        <SectionSkills :items="profile.skills" />
        <SectionLanguages :items="profile.languages" />
      </div>
    </Transition>
  </main>
</template>
