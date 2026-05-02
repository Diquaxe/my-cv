import { i18n } from '../i18n.js'
import { useLocale } from './useLocale.js'

const RU_LANGS = ['ru', 'be', 'kk', 'uk']

export function useGeoLang() {
  const { locale } = useLocale()

  const saved = localStorage.getItem('locale')
  if (saved) {
    locale.value = saved
    i18n.global.locale.value = saved
    return
  }

  const browserLang = navigator.language?.toLowerCase().split('-')[0] ?? 'en'
  const detected = RU_LANGS.includes(browserLang) ? 'ru' : 'en'
  locale.value = detected
  i18n.global.locale.value = detected
  localStorage.setItem('locale', detected)
}
