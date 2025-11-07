import eslintJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  eslintJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  eslintPluginImport.configs.typescript,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: true,
    arrowParens: true,
    braceStyle: "1tbs",
    blockSpacing: true,
    quoteProps: "consistent-as-needed",
    commaDangle: "always-multiline",
  }),
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        Buffer: true,
        React: true,
        JSX: true,
      },
      parserOptions: {
        projectService: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      "import": eslintPluginImport,
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      "@stylistic": stylistic,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...eslintPluginReact.configs["recommended"].rules,
      ...eslintPluginReact.configs["jsx-runtime"].rules,
      "array-callback-return": ["error", { checkForEach: true }],
      "consistent-return": "error",
      "curly": ["error", "all"],
      "eqeqeq": ["error", "always", { null: "ignore" }], // Always use "===" unless comparing nullish values.
      "no-console": "error",
      "no-implicit-coercion": "error",
      "no-param-reassign": "error",
      "no-var": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-cycle": "error",
      "react/function-component-definition": ["error", { namedComponents: "function-declaration" }],
      "react/self-closing-comp": "error",
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-refresh/only-export-components": "error",
      "@stylistic/array-bracket-spacing": "error",
      "@stylistic/arrow-spacing": "error",
      "@stylistic/comma-spacing": "error",
      "@stylistic/eol-last": "error",
      "@stylistic/function-call-spacing": "error",
      "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
      "@stylistic/jsx-curly-brace-presence": ["error", { props: "never", propElementValues: "always", children: "never" }],
      "@stylistic/jsx-curly-newline": "error",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-curly-spacing": ["error", { when: "never", children: { when: "always" } }],
      "@stylistic/jsx-equals-spacing": "error",
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: { single: 100, multi: 1 } }],
      "@stylistic/jsx-quotes": ["error", "prefer-double"], // Prefer double quotes in JSX attributes.
      "@stylistic/jsx-tag-spacing": ["error", {
        afterOpening: "never",
        closingSlash: "never",
        beforeClosing: "proportional-always",
        beforeSelfClosing: "always",
      }],
      "@stylistic/jsx-wrap-multilines": ["error", {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "ignore",
      }],
      "@stylistic/key-spacing": "error",
      "@stylistic/keyword-spacing": "error",
      "@stylistic/member-delimiter-style": "error",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/object-curly-newline": ["error", { multiline: true, consistent: true, minProperties: 0 }],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/operator-linebreak": ["error", "before"],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }], // Always use single quotes for string literals unless avoiding escape.
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],
      "@stylistic/space-in-parens": "error",
      "@stylistic/space-infix-ops": "error",
      "@stylistic/type-annotation-spacing": "error",
      "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
      "no-shadow": "off", // Disable base rule.
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "no-unused-vars": "off", // Disable base rule.
      "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "none" }],
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/restrict-template-expressions": ["error", {
        allowBoolean: true,
        allowNumber: true,
        allowNullish: true,
        allowAny: false,
        allowRegExp: false,
      }],
      "@typescript-eslint/strict-boolean-expressions": ["error", {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      }],
    },
  },
];
