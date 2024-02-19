## 🚀 Why use this template?

Creating an optimized project from scratch is time-consuming and challenging. I've created this template for me and others to streamline the process of starting new projects and add things along the way.

This template includes Next.js, TypeScript, and Tailwind CSS, along with ESLint commands, prettier configuration, strict ESLint rules, icons component, standards of the GitHub repository, and many more.

<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />

## 🎁 What does this template include?

- It uses the latest version of Next.js `v14.1`, TypeScript `v5.2`, and TailwindCSS `v3.3`.
- It has a strict environment of using npm `v10` or higher with `.npmrc` and node `v16` or higher. 
- This includes [`Code_OF_CONDUCT.md`](/CODE_OF_CONDUCT.md), [`Security.md`](/Security.md), [`MIT LICENSE`](/LICENSE) as standards of a repository.
- This uses prettier as a default code formatter. You can read the [`prettier configuration`](/prettier.config.js) and check what files are ignored by prettier in [`.prettierignore`](/.prettierignore).
- This has strict ESLint rules.
   - You can read the [`ESLint configurations`](/.eslintrc.json) used here and ignored files in [.`eslintignore`](/.eslintignore).
   - It warns of unused variables and usage of certain types in TypeScript.
- This also uses advanced TypeScript Configurations like `noImplicitAny` & `strictNullChecks` which you can read in [`tsconfig`](/tsconfig.json).
- This has a [`icon component`](/components/icons.tsx) system using Lucide Icons. You can easily add SVG icons without adding them in a different file. 
   - You can import `Icons` from `@/components/icons.tsx` and use tailwind as usual. 
   - You will have to specify the height and width of the icon.
   - You will have to adjust the viewBox and fill the property as `currentColor` if you want to specify the color using tailwind.
   - You can also import icons from Lucide and use them as specified above.
- This uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Open_Sans, a custom Google Font. You can view the file in `@/lib/fonts.ts`.
- This includes [`lib/utils.ts`](./lib/utils.ts) that uses `clsx` and `tailwind merge` to allow the combination of combined classes.
- This includes a plugin that will automatically arrange the classnames in the correct order.
- This also improves accessibility by using the `eslint-plugin-jsx-a11y` plugin to help catch accessibility issues early.
   - For example, this plugin warns if you have images without `alt` text, use the `aria-*` and `role` attributes incorrectly, and more. 
- See below for the commands that you can use and what it does.

<br>

## 💻 What are the commands that you can use?

These are the commands that you can use and what it does in brief.

- `npm run format` - Formats code files according to defined formatting rules using Prettier, improving code readability and consistency.
- `npm run lint:fix` - Automatically fixes any fixable issues identified during linting, enhancing code quality and consistency.
- `npm run lint` - Analyzes the codebase for potential issues and inconsistencies using ESLint, providing feedback on code quality.
- `npm run preview` - Builds the Next.js application and starts a server, allowing for previewing of the production build locally before deployment.
- `npm run type-check` - Checks TypeScript files for type errors without emitting any compiled code, ensuring type safety in the codebase.
- `npm run format:write`: Formats specific files (located in the `app`, `lib`, and `components` directories) using Prettier, writes changes to disk, and utilizes cache
- `npm run format:check`: Checks specified files for formatting issues without modifying them, ensuring code conformity to formatting standards, utilizes cache

<br>

## ✅ Guidelines to run web app locally

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Use these commands to work on this locally.

```bash
# to install dependencies 
npm install

# to run the server
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the application.

<br>

## 📂 File Structure

A quick look at the structure of the template. This doesn't cover config and other files in the root dir.

```
.
└── components
    └───icons.tsx
└── lib
    └───fonts.ts
    └───utils.ts
└── src/app
    └───layout.tsx
    └───page.tsx
└── public
    └───next.svg
    └───vercel.svg
└── styles
    └──globals.css
```

<br>

<!--- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!--- -- 💜 Thanks For Visiting --------------------------------------------------------------------------------------------------------------------------- -->
<!--- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="30" /> Thanks for using the template

### Please 🌟 this template! It really helps others to find this!!  <img src="https://user-images.githubusercontent.com/74038190/216125640-2783ebd5-e63e-4ed1-b491-627a40b24850.png" width="25" />

Please create an issue for suggestions and contact me, [Anmol Baranwal](https://github.com/Anmol-Baranwal) if you have any feedback or suggestions.