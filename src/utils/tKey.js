import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

const messages = { en, ru }

export function tKey(key, locale) {
  return key.split('.').reduce((o, k) => o?.[k], messages[locale] ?? messages.ru) ?? key
}
