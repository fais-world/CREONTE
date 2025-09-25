## CREONTE Chat Mode Context

Цей файл використовується GitHub Chat Mode для розуміння поточного стану проєкту CREONTE та надання відповідей з урахуванням тимчасової архітектури.

### 1. Поточний статус

- Використовується шаблон Payload Website (v3.56.0) але зараз фокус на тимчасовій статичній сторінці. Тому і видалено все що стосується адмінки, колекцій, форм, динамічного контенту.
- Тимчасовий лендінг доступний за маршрутом `/landing` (група `src/app/(static)`), не залежить від Payload.
- У основному стеку підготовлено локалізацію (uk/en) в `payload.config.ts`, локалізовані основні поля Pages, Posts, Categories і label у навігаційних лінках.

### 2. Чому існує статична версія

Потрібно швидко продемонструвати лендінг без налаштувань БД / секретів / деплою. Пізніше сторінка буде перенесена в CMS (Payload) з динамічним контентом, багатомовністю та адмінкою.

### 3. Статичні файли зараз

- `src/app/(static)/layout.tsx` – мінімальний layout, без AdminBar, без Payload.
- `src/app/(static)/landing/page.tsx` – весь хардкод контенту.
- `chatnote-kreont.md` – технічна записка (дублює багато із цього файлу, але цей файл — джерело для чат-режиму).

### 4. Структура секцій лендінгу

1. Hero (title, subtitle, CTA кнопки, зображення)
2. Історичні картки (3 шт)
3. Timeline (маркі)
4. Світова премʼєра
5. Виконавці (група карток)
6. Цитата (UNESCO)
7. Партнери
8. CREONTive Europe (future plans)
9. Фінальний CTA
10. Footer

### 5. Майбутні колекції у Payload

| Collection / Global            | Поля (localized де потрібно)            | Примітки                               |
| ------------------------------ | --------------------------------------- | -------------------------------------- |
| hero (global або як блок Page) | title*, subtitle*, ctas[{label*, href}] | localized: title, subtitle, ctas.label |
| storyCards                     | title*, excerpt*, image                 | order field                            |
| timelineItems                  | label\*, order                          | показ у marquee                        |
| performers                     | name*, role*, bio\*, photo, order       | localized текстові                     |
| pressQuotes                    | quote*, source*, logo?                  |                                        |
| partners                       | name, logo, tier, url?                  | локалізація не критична                |
| teamMembers                    | name*, role*, bio\*, image, order       |                                        |
| futurePlans                    | title*, description*, category?, order  |                                        |

### 6. Міграція зі статичного у CMS (план)

1. Додати колекції у `src/payload.config.ts`.
2. Створити seed script (наприклад `scripts/seed.ts`).
3. Перенести хардкод масиви з `landing/page.tsx` у seed.
4. Замість хардкоду викликати Payload API (server side `getPayload().find(...)`).
5. Додати `/[locale]/` маршрути (вже є базова структура в іншій частині проєкту) та редірект `/` → `/uk`.
6. Додати language switcher (зміна locale сегменту, fallback на uk).
7. Оптимізувати зображення (перенести в Media collection, замінити прямі URL на next/image).
8. Видалити `(static)` після завершення.

### 7. Env / запуск (для майбутнього CMS режиму)

Створити `.env.local`:

```
PAYLOAD_SECRET=CHANGE_ME_LONG_RANDOM
DATABASE_URI=mongodb://localhost:27017/kreont
```

Потім:

```
pnpm dev
```

Адмінка: `/admin` (після першого запуску зареєструвати користувача).

### 8. Поточні обмеження

- Немає реального логотипа (тимчасове зображення).
- Відсутній адаптивний контент EN (ще не перекладено).
- Немає форм (CTA кнопки поки як anchors).
- SEO метадані статичні / мінімальні.

### 9. Пріоритетні наступні кроки (якщо буде команда / автозапит від Chat Mode)

1. scaffold collections (performers, timelineItems, partners, pressQuotes, futurePlans, teamMembers).
2. seeds (uk base).
3. dynamic fetch у `/[locale]/`.
4. локалізований header/footer.

### 10. Інструкція для Chat Mode агентів

Якщо користувач просить “мігрувати у Payload”: виконати кроки з Розділу 6 по порядку.
Якщо просить “оновити контент лендінгу”: змінити масиви у `landing/page.tsx` (тимчасово) і нагадати про майбутню міграцію.
Якщо просить “додати нову секцію”: поки що статично в `landing/page.tsx`; запропонувати майбутній формат колекції.

### 11. Ліцензійні нотатки

Hotlink зображень із `http://utox.medved.kiev.ua/creonte/images/...` — для продакшну перемістити у власне медіа.

---

Цей файл є опорною “памʼяттю” для чат-асистента до завершення міграції у Payload CMS.
