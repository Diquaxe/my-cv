export function t(field, locale) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[locale] ?? field['en'] ?? ''
}
