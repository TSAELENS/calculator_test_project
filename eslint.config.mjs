import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    }
  },
  {
    files: ["playwright.config.js", "jest.config.js"], // ✅ Modification ici
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // ✅ Important : On le traite comme un module
      globals: globals.node,
    },
    rules: {
      indent: ["error", 2],
      "no-undef": "off"
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      indent: ["error", 2],
      "no-undef": "off"
    }
  },
  pluginJs.configs.recommended,
];
