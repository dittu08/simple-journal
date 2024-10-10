import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      quotes: ["error", "single"],
      "no-duplicate-imports": "error",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": "error",
      "no-multiple-empty-lines": "error",
      "prettier/prettier": "error",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
