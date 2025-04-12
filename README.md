# Electric Car Website

A modern, responsive website showcasing electric cars, built with React and Tailwind CSS. This project is a frontend implementation of a Figma design, focusing on clean UI/UX and responsive design principles.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Category Filtering**: Filter cars by brand (Porsche, Audi, Tesla, etc.).
- **Interactive UI**: Smooth animations and transitions for a better user experience.
- **Dynamic Content**: Car details and features are dynamically rendered.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Library for using icons in the project.
- **TypeScript**: Adds type safety to the project.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electric-car-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd electric-car-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## UI Design Credit

The UI design for this project was created by **[Bedimcode](https://www.bedimcode.com/)** and is available on Figma. You can view the original design here:  
[Figma Design - Responsive Car Website](<https://www.figma.com/design/HeyvwEFAkZa5DKRphxbfIC/Figma-Design-Responsive-car-website-(Community)?node-id=0-1&p=f&t=BKBKl4MUpxr1R7YA-0>)

## Acknowledgments

Special thanks to **[Bedimcode](https://www.bedimcode.com/)** for providing this beautiful design. Bedimcode creates amazing free and premium UI designs for developers. Check out their website for more inspiring designs and resources.
