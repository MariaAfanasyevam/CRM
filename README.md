# Vue 3 Account Manager

Приложение для управления учетными записями с использованием Vue 3, Composition API, TypeScript и Pinia.

## Особенности

- Добавление, редактирование и удаление учетных записей.
- Поддержка двух типов учетных записей: LDAP и Локальная.
- Валидация обязательных полей (логин и пароль для локальных учетных записей).
- Поле "Метка" поддерживает несколько значений через разделитель `;`.
- Возможность показать/скрыть пароль с помощью иконки глаза.
- Сохранение данных в `localStorage` для сохранения между перезагрузками страницы.

## Технологии

- [Vue 3](https://vuejs.org/) + Composition API
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) для управления состоянием
- [Vite](https://vitejs.dev/) для сборки проекта
- [UI-компоненты](https://shadcn.io/) / кастомные компоненты для форм
- [Iconify](https://iconify.design/) и [FontAwesome](https://fontawesome.com/) для иконок

## Установка

```bash
git clone https://github.com/<username>/<repository-name>.git
cd <repository-name>
npm install
npm run dev
## Для входа требуются логин и пароль
