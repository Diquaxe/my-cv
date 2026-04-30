import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock vue-i18n и i18n модуль до импорта useLocale
vi.mock('../i18n.js', () => ({
  i18n: {
    global: { locale: { value: 'ru' } },
  },
}))

describe('useLocale()', () => {
  beforeEach(() => {
    localStorage.clear()
    // Сбрасываем модуль перед каждым тестом для чистого состояния
    vi.resetModules()
  })

  it('defaults to "ru" when localStorage is empty', async () => {
    const { useLocale } = await import('../composables/useLocale.js')
    const { locale } = useLocale()
    expect(locale.value).toBe('ru')
  })

  it('reads saved locale from localStorage', async () => {
    localStorage.setItem('locale', 'en')
    const { useLocale } = await import('../composables/useLocale.js')
    const { locale } = useLocale()
    expect(locale.value).toBe('en')
  })

  it('toggleLocale switches ru → en and saves to localStorage', async () => {
    const { useLocale } = await import('../composables/useLocale.js')
    const { locale, toggleLocale } = useLocale()
    locale.value = 'ru'
    toggleLocale()
    expect(locale.value).toBe('en')
    expect(localStorage.getItem('locale')).toBe('en')
  })

  it('toggleLocale switches en → ru', async () => {
    const { useLocale } = await import('../composables/useLocale.js')
    const { locale, toggleLocale } = useLocale()
    locale.value = 'en'
    toggleLocale()
    expect(locale.value).toBe('ru')
    expect(localStorage.getItem('locale')).toBe('ru')
  })

  it('does NOT write "lang" key to localStorage (unified key)', async () => {
    const { useLocale } = await import('../composables/useLocale.js')
    const { toggleLocale } = useLocale()
    toggleLocale()
    expect(localStorage.getItem('lang')).toBeNull()
  })
})
