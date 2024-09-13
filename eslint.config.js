// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginVue from "eslint-plugin-vue";

// export default [
//   {files: ["**/*.{js,mjs,cjs,vue}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
// ];
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: ["error", "double"],
    "import/no-extraneous-dependencies": "off",
    "vue/multi-word-component-names": "off",
  },
};
