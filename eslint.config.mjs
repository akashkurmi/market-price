import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off", // Must turn off the default rule
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error", // Highlights unused imports
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" },
      ],
    },
  },
  {
    // This is where you add your custom rule overrides
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
    
  },
];

export default eslintConfig;
