# Лига Масленникова — неофициальный фан-портал

Статичный сайт на **React**, **Vite**, **Tailwind CSS**, **Framer Motion** и **GSAP**.

## Локально

```bash
npm ci
npm run dev
```

Сборка: `npm run build`, превью: `npm run preview`.

## GitHub Pages и домен adilkan.com

Деплой идёт workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) при пуше в ветку `main`.

Сайт настроен под **кастомный домен в корне**: **`https://adilkan.com/`**. В `vite.config.ts` задано `base: '/'`, а в `src/App.tsx` `BrowserRouter` работает без `basename`.

### 1. Включить Pages

В репозитории: **Settings → Pages → Build and deployment**

- **Source:** GitHub Actions (не «Deploy from a branch»).

Пока Pages не включены, job `deploy` падает с ошибкой вроде *Ensure GitHub Pages has been enabled*.

### 2. Кастомный домен

В **Settings → Pages → Custom domain** укажите `adilkan.com`, включите **Enforce HTTPS** после проверки DNS.

В корне сайта лежит [`public/CNAME`](public/CNAME) с `adilkan.com` — он попадает в `dist` при сборке, чтобы GitHub не сбрасывал домен после каждого деплоя.

### 3. DNS у регистратора домена

Для **apex** `adilkan.com` (как у вас в CNAME):

| Тип | Имя | Значение |
|-----|-----|----------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

Опционально для **www**: **CNAME** `www` → `<user>.github.io` (или оставьте только apex — как удобнее).

Подождите распространения DNS и снова нажмите **Verify** в настройках GitHub, если домен уже добавлен как verified.

### 4. Повторный деплой

После включения Pages: **Actions → Deploy to GitHub Pages → Run workflow** (или пустой коммит в `main`).
