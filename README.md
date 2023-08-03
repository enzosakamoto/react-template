
# Basic ReactJS Template ⚛️

Template for basic ReactJS applications intended for SPA with TypeScript. Builded with [Vite](https://vitejs.dev).

## Useful Packages

**Styles**
* [Tailwind CSS](https://tailwindcss.com)
* [Tailwind Variants](https://www.tailwind-variants.org)

**Linting and Formatter**
* [Eslint](https://eslint.org)
    * [Eslint for Prettier](https://github.com/prettier/eslint-config-prettier)
    * [Eslint for React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
    * [Eslint for Import Helpers](https://github.com/Tibfib/eslint-plugin-import-helpers/tree/master)
* [Prettier](https://prettier.io)
    * [Prettier for Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

**Routes**
* [React Router DOM](https://github.com/remix-run/react-router)

**API Usage**
* [Axios](https://axios-http.com/ptbr/docs/intro)

## Folder Structure

```
.
│
├── src
│   ├── pages
│   │   └── home
│   ├── components
│   │   ├── Navbar.tsx
│   │   └── Button.tsx
│   └── api
│       └── cep.ts
│
└── __tests__
    ├── pages
    │   └── home
    ├── components
    │   ├── Navbar.test.tsx
    │   └── Button.test.tsx
    └── api
```

## Names

* **Variables**
    * camelCase (ex. regexEmail, userId)

* **Methods**
    * camelCase (ex. getItemById, getAllItemsByUser)

* **Folders and Directories**
    * snake_case (ex. create_user)

* **Components**
    * First letter capitalized (ex. Navbar.tsx, Button.tsx)

* **Tests**
    * Sufix **```.test.ts```** (ex. button.test.ts)

## Author
* [Enzo Sakamoto](https://github.com/enzosakamoto)

## Special Thanks
* [Dev. Community Mauá](https://github.com/Maua-Dev/)




