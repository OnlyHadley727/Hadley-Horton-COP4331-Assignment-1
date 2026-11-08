
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: [
      "node_modules/**",
      "public/js/md5.js"
    ],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
]);
