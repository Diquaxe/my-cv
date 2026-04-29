import { i18n } from '../i18n.js'
import { useLocale } from './useLocale.js'

const RU_COUNTRIES = ['RU', 'BY', 'KZ', 'UA']

export async function useGeoLang() {
  const { locale } = useLocale()

  const saved = localStorage.getItem('lang')
  if (saved) {
    locale.value = saved
    i18n.global.locale.value = saved
    return
  }

  try {
    const res = await fetch('https://ip-api.com/json/?fields=countryCode')
    const { countryCode } = await res.json()
    const detected = RU_COUNTRIES.includes(countryCode) ? 'ru' : 'en'
    locale.value = detected
    i18n.global.locale.value = detected
    localStorage.setItem('locale', detected)
  } catch {
    // fallback: оставляем 'ru' (дефолт из useLocale)
  }
}
