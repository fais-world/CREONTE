# CREONTE Minimal Landing

Тимчасовий статичний лендінг (Next.js App Router + Tailwind). Поки без CMS — лише демонстрація контенту. Далі планується міграція у Payload з локалізацією.

## Швидкий старт

```bash
pnpm install      # встановити залежності (при першому запуску або після очищення)
pnpm dev          # dev server (порт 3000 або наступний вільний)
```

## Структура

```
src/
  app/
    layout.tsx   – metadata + базова HTML обгортка
  page.tsx     – редірект на /uk
  [locale]/page.tsx – локалізовані сторінки (uk/en)
    globals.css  – Tailwind + глобальні стилі (marquee, scroll-behavior)
public/
  favicon.svg    – тимчасовий значок
```

## Секції

1. Hero
2. Story Cards / Історичні картки
3. Timeline (marquee)
4. Premiere / Світова премʼєра
5. Performers / Виконавці
6. Quote / Цитата
7. Partners / Партнери
8. Future Plans / CREONTive Europe
9. Final CTA / Фінальний заклик
10. Footer

## Accessibility / Performance

- Використано `next/image` у локалізованих сторінках.
- Lazy loading (крім hero).
- Smooth scroll.
- Готується розбиття на дрібніші компоненти для CMS.

## Міграція у Payload (черга)

1. Колекції: hero, storyCards, timelineItems, performers, pressQuotes, partners, futurePlans.
2. Seed script із поточного контенту.
3. SSR fetch через `getPayload().find` у Server Components.
4. Локалізовані маршрути `/[locale]/` + редірект `/` → `/uk`.
5. Language switcher.
6. Media collection + next/image.
7. Видалення хардкод масивів.

## TODO (наступні кроки)

- Перенести зображення з `TEMP_HTML_SOURCE_PAGE/index_files/*.jpg` → `public/media` + оновити посилання (зараз частина ще не скопійована).
- Додати відсутні секції з оригінальної HTML (team, gallery, press, staging / production notes).
- Розширити словники EN (фіналізувати переклади).
- Додати динамічні metadata per locale (generateMetadata) після підтвердження контенту.
- Підключити Payload CMS (collections + seeds) — план у файлі chat context.
- Опціонально: OG image генератор (через route handler).
- Компонентні секції (Hero, StoryCard, TimelineMarquee, PerformersGrid, PartnersCloud, FutureList).
- Оптимізувати marquee (prefers-reduced-motion).
- Зробити тему зберігання у cookie (зараз localStorage + клас на <html>).

## Ліцензія медіа

Поточні зображення hotlink — тільки для демо. У продакшн: локальні файли + відповідні права.

---

_Мінімальний стек для швидкого показу. Готовий до поступової міграції в CMS. Темна / світла тема, локалізація uk/en, дизайн-кнопки._
