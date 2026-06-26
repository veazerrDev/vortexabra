# Vortexabra — Інструкція з редагування

## Як додати нову соціальну мережу

1. Відкрийте файл `src/data/siteData.ts`.
2. Знайдіть масив `socialLinks`.
3. Додайте новий об'єкт у форматі:

```typescript
{
  id: 'назва-мережі',
  name: 'Назва мережі',
  url: 'https://посилання',
  description: 'Короткий опис',
  icon: '🔗', // будь-який емодзі
}
```

Приклад:

```typescript
{
  id: 'instagram',
  name: 'Instagram',
  url: 'https://instagram.com/vortexabra',
  description: 'Наш Instagram — фото та відео',
  icon: '📸',
}
```

## Як видалити соціальну мережу

1. Відкрийте `src/data/siteData.ts`.
2. Знайдіть масив `socialLinks`.
3. Видаліть відповідний об'єкт (рядки з `id:` до наступного `},`).

## Як додати новий проєкт

1. Відкрийте `src/data/siteData.ts`.
2. Знайдіть масив `projects`.
3. Додайте новий об'єкт у форматі:

```typescript
{
  id: 'назва-проєкту',
  name: 'Назва проєкту',
  description: 'Опис проєкту',
  url: 'https://посилання',
}
```

Приклад:

```typescript
{
  id: 'my-game',
  name: 'My Game',
  description: 'Нова гра від Vortexabra',
  url: 'https://www.roblox.com/games/123456789',
}
```

## Як видалити проєкт

1. Відкрийте `src/data/siteData.ts`.
2. Знайдіть масив `projects`.
3. Видаліть відповідний об'єкт.

## Важливо

- Усі зміни робляться **лише** у файлі `src/data/siteData.ts`.
- Компоненти автоматично підхоплюють нові дані.
- Після редагування перезапустіть сервер розробки (`npm run dev`).
