# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Проект

Клон [read.cv](https://read.cv) — статичный персональный CV-сайт без бэкенда. Два экрана: главная с резюме и детальная страница опыта. Данные хранятся целиком в одном JSON-файле.

## Стек

- **Vue 3** — Composition API, `<script setup>` везде
- **Vite 6** — сборщик и dev-сервер
- **Tailwind CSS 3** — только утилиты для layout/spacing; цвета и типографика — через CSS-переменные
- **vue-router 4** — hash-less history, два маршрута
- **vue-i18n 9** — ru/en, `legacy: false` (Composition API mode)
- **@unhead/vue** — управление `<head>`

## Структура

```
src/
  data/profile.json      — единственный источник всех данных CV
  locales/en.json        — UI-строки (навигация, заголовки секций)
  locales/ru.json
  assets/tokens.css      — CSS-переменные темы (цвета, размеры)
  assets/               — статика (изображения)
  components/           — секции CV (About, Experience, Education, Projects, Contact, AppHeader, ThemeToggle)
  views/HomeView.vue    — главная страница, собирает все секции
  views/WorkView.vue    — детальная страница опыта (/work/:id)
  composables/useLocale.js  — переключение языка + sync с localStorage
  utils/t.js            — утилита перевода полей профиля
  router/index.js       — маршруты
  i18n.js               — инициализация vue-i18n
  main.js               — точка входа
```

## Команды

```bash
npm install       # установка зависимостей
npm run dev       # dev-сервер на http://localhost:5173
npm run build     # production-сборка в dist/
npm run preview   # превью собранного dist/
```

## Точки входа

Читать в таком порядке: `src/main.js` → `src/App.vue` → `src/router/index.js` → `src/views/HomeView.vue`.

## Конвенции кода

**Два способа перевода — не путать:**
- `t(field, locale)` из `src/utils/t.js` — для полей `profile.json`, где перевод встроен в данные: `{ en: "...", ru: "..." }`
- `$t('key')` / `useI18n().t` — для UI-строк из `src/locales/*.json`

**CSS-переменные вместо Tailwind-цветов.** Все цвета — через `var(--color-bg)`, `var(--color-label-primary/secondary/tertiary)`, `var(--color-accent)`. Tailwind используется только для layout (`flex`, `gap-*`, `mb-*`, `text-sm` и т.п.).

**Темизация:** `data-theme="light"` на `<html>` переключает тему. Дефолт — тёмная. Хранится в `localStorage('theme')`.

**Accent-цвет** берётся из `profile.accentColor` и записывается в `--color-accent` через `document.documentElement.style.setProperty` при монтировании `App.vue`.

**Локаль** хранится в `localStorage('locale')`, дефолт — `'ru'`. Переключается через `useLocale()` composable.

**Данные профиля:** все переводимые поля в `profile.json` имеют форму `{ en: "...", ru: "..." }`. Нетранслируемые поля (например `achievements[]`) — просто строки.

## Данные CV

Всё редактируется в `src/data/profile.json`:
- `accentColor` — HEX, применяется глобально как CSS-переменная
- `experience[].id` — используется как параметр маршрута `/work/:id`
- `experience[].images` — массив URL для галереи на странице опыта (может быть пустым)
- `avatar` — путь к файлу (относительно `public/`)

## Чего не трогать

- `dist/` — генерируется при сборке
- `node_modules/`
