import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier";


export default [
  // Base JavaScript + TypeScript rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Next.js recommended config
  next(),

  // Your custom project settings
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    plugins: {
      prettier,
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          useTabs: true,
          tabWidth: 2,
          singleQuote: false,
          semi: true,
          trailingComma: "none",
          printWidth: 160,
        },
      ],
    },
  },
];
