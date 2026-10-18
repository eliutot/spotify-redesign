# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


# Spotify//OS

A concept redesign of Spotify's onboarding, built as a cyber-brutalism OS interface. Seven screens, single-file HTML, no build step, no frameworks, no dependencies beyond two Google Fonts.

dis is a concept, not a production app, it started as a React prototype. then as a Figma redesign exercise. it kept collapsing back into the same problem :( the single-file version is the answer to that
---
<img width="400" height="711" alt="spotify-os" src="https://github.com/user-attachments/assets/20916a7a-b090-44a2-85de-fcc3bcaf5cea" />
--

## License

Personal project, for portfolio purposes. Not affiliated with Spotify. The Spotify logo is used as a placeholder mark for the concept only. Icons are hand-drawn SVG paths, not taken from any icon library.

© 2026 Angelica Dornton
