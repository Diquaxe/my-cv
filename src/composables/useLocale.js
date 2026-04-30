import { ref } from 'vue'
import { i18n } from '../i18n.js'

const locale = ref(localStorage.getItem('locale') || 'ru')

export function useLocale() {
  function toggleLocale() {
    locale.value = locale.value === 'ru' ? 'en' : 'ru'
    localStorage.setItem('locale', locale.value)
    i18n.global.locale.value = locale.value
  }
  return { locale, toggleLocale }
}
