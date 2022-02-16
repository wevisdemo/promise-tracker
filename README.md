# 🤞 WeVis Promise Tracker

Thai politicians and parties promise tracker

## 🌎 Environment

- Staging: https://wevisdemo.github.io/promise-tracker/
- Production: Not deployed yet

## 💻 Tech stack

- [NuxtJS](https://nuxtjs.org/) with [Vue 2 and TypeScript](https://v2.vuejs.org/v2/guide/typescript.html#Basic-Usage)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)

## ⚽ Working style

- We use Github issue to track the progress.
  - Please assign yourself to the issue you are working on.
  - I don't want to force "HOW" to implement the issue and we can discuss everything on the issue.
- We use Trunk-based development.
  - No braches, we all push to main branch.
  - Push as soon as possible as long as it doesn't break the web.
  - Linter and formater will be run on commit, and test will be run on push so you can't push if the test fail.
- Encourage to write component test with TDD (Test driven development) but it's not mendatory.
- Each time the code is pushed to main, Github Action will build and deploy to the staging environment.
- Use asynchonous communication. Let's try not to have meeting if not nessesary.
  - For issue related, please use Githu issue
  - Other discussion can be done in slack

## 📂 Directory structure

Use `pascal-case` for every file name since Linux (eg. Github Action runner) is not case-incensitive, in contrary to Mac and Windows.

- `/assets` Assets such as images which [can be import into Nuxt](https://nuxtjs.org/docs/directory-structure/assets/)
  - Before adding new assets, check first if it's already exist here.
  - For SVG that can change the color (eg. button icon on hover), recommend in use inline svg with `currentColor` and Tailwind color preset
- `/components` Vue components
  - Put on the root if it's shared between pages
  - Put in the `/components/<page>/` if it's only used in that page
  - If components is too big or getting duplicated, you should split into several component which can also be group in sub-folder
- `/constants` Constants, enum, map sharing across the project
  - `promise.ts` Promise category and status
- `/pages` Represent [Nuxt routing](https://nuxtjs.org/docs/directory-structure/pages)
- `/tests` Test file
  - Recommend to mimick project structure eg. `/tests/components/component-name.test.ts`

## 💅 Styling and design system

- We used [WeVis Design System](https://wevisdemo.github.io/design-systems/) which provide
  - Utility classes for typography
  - Vue component
- For other styling customization beyond WeVis design system, use Tailwindcss
  - Color is defined in `tailwind.config.css` which naming should be related to Figma
  - Configuration is also available on http://localhost:3000/\_tailwind/ when dev server is running

**THANK YOU FOR ALL THE CONTRIBUTION ❤️**
