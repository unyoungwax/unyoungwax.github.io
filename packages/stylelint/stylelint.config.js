export default {
  extends: [
    "stylelint-config-standard-scss",
    "@stylistic/stylelint-config",
  ],
  rules: {
    "alpha-value-notation": "number",
    "color-function-alias-notation": null,
    "color-hex-length": "long",
    "declaration-property-value-no-unknown": true,
    "selector-class-pattern": [/^[a-z0-9_]+$/, { resolveNestedSelectors: true }],
    "@stylistic/color-hex-case": null,
  },
};
