# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!--



@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans text-white m-0 p-0;

  /* Full-page gradient background */
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  background-attachment: fixed;
  /* so gradient stays while scrolling */
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
}

html {
  scroll-behavior: smooth;
}

/* Optional: unify all section backgrounds so they inherit this gradient nicely */
section {
  @apply relative z-10 min-h-screen py-24 px-6;
  background: transparent;
  /* let body gradient show through */
}


@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans text-white m-0 p-0;

  /* Professional dark gradient background */
  background: linear-gradient(120deg, #0d1117, #161b22, #21262d);
  background-attachment: fixed;
  /* stays during scroll */
  background-size: cover;
  background-repeat: no-repeat;
  color: #e6edf3;
  /* soft off-white for a modern professional feel */
}

html {
  scroll-behavior: smooth;
}

/* Optional: unify section padding and spacing for consistency */
section {
  @apply relative z-10 min-h-screen py-28 px-6;
  background: transparent;
  /* sections inherit body gradient */
}

@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans text-white m-0 p-0;

  /* Premium modern gradient */
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  background-attachment: fixed;
  /* stays on scroll */
  background-size: cover;
  background-repeat: no-repeat;

  /* Optional subtle noise overlay for texture */
  /* Uncomment if you want a slight texture */
  /* background-image: linear-gradient(135deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(225deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, #0f0c29, #24243e); */

  color: #f5f5f5;
  /* soft, professional off-white text */
}

html {
  scroll-behavior: smooth;
}

/* Unified section style for consistency */
section {
  @apply relative z-10 min-h-screen py-28 px-6;
  background: transparent;
  /* inherits the gradient */
}

@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans text-white m-0 p-0;

  /* Premium modern gradient */
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  background-attachment: fixed;
  /* stays on scroll */
  background-size: cover;
  background-repeat: no-repeat;

  /* Optional subtle noise overlay for texture */
  /* Uncomment if you want a slight texture */
  /* background-image: linear-gradient(135deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(225deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, #0f0c29, #24243e); */

  color: #f5f5f5;
  /* soft, professional off-white text */
}

html {
  scroll-behavior: smooth;
}

/* Unified section style for consistency */
section {
  @apply relative z-10 min-h-screen py-28 px-6;
  background: transparent;
  /* inherits the gradient */
}
 -->

<!-- body {
    margin: calc(var(--spacing) * 0);
    padding: calc(var(--spacing) * 0);
    font-family: var(--font-sans);
    color: var(--color-white);
    background: linear-gradient(135deg, #297291, #597d8a, #2c6458);
    background-attachment: fixed;
    color: white;
} -->
