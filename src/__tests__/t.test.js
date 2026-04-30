import { describe, it, expect } from 'vitest'
import { t } from '../utils/t.js'

describe('t() translation helper', () => {
  it('returns empty string for null/undefined', () => {
    expect(t(null, 'ru')).toBe('')
    expect(t(undefined, 'ru')).toBe('')
  })

  it('returns the string as-is when field is a plain string', () => {
    expect(t('Hello', 'ru')).toBe('Hello')
    expect(t('Hello', 'en')).toBe('Hello')
  })

  it('returns locale-specific value from object', () => {
    const field = { en: 'Hello', ru: 'Привет' }
    expect(t(field, 'ru')).toBe('Привет')
    expect(t(field, 'en')).toBe('Hello')
  })

  it('falls back to "en" when locale key is missing', () => {
    const field = { en: 'Hello' }
    expect(t(field, 'ru')).toBe('Hello')
  })

  it('returns empty string when both locale and "en" are missing', () => {
    const field = { fr: 'Bonjour' }
    expect(t(field, 'ru')).toBe('')
  })

  it('handles array values (list descriptions)', () => {
    const field = { ru: ['пункт 1', 'пункт 2'], en: ['item 1', 'item 2'] }
    expect(t(field, 'ru')).toEqual(['пункт 1', 'пункт 2'])
    expect(t(field, 'en')).toEqual(['item 1', 'item 2'])
  })
})
