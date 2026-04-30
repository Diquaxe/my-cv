import { i18n } from '../i18n.js'
import { useLocale } from './useLocale.js'

const RU_COUNTRIES = ['RU', 'BY', 'KZ', 'UA']

export async function useGeoLang() {
  const { locale } = useLocale()

  // Единый ключ 'locale' (без дублирования 'lang')
  const saved = localStorage.getItem('locale')
  if (saved) {
    locale.value = saved
    i18n.global.locale.value = saved
    return
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000)

    const res = await fetch('https://ip-api.com/json/?fields=countryCode', {
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const { countryCode } = await res.json()
    const detected = RU_COUNTRIES.includes(countryCode) ? 'ru' : 'en'
    locale.value = detected
    i18n.global.locale.value = detected
    localStorage.setItem('locale', detected)
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.warn('[useGeoLang] geo-detection failed:', err.message)
    }
    // fallback: оставляем 'ru' (дефолт из useLocale)
  }
}
