import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: [".nuxt/*"],
  },
  {
    rules: {
      // "no-restricted-imports": [
      //   "error",
      //   {
      //     paths: [
      //       {
      //         name: "react-native",
      //         importNames: ["Text"],
      //         message: "import 'Text' from 'ui/_components' instead",
      //       },
      //       {
      //         name: "react-native",
      //         importNames: ["View"],
      //         message: "import 'View' from 'ui/_components' instead",
      //       },
      //     ],
      //   },
      // ],
    },
  },
];
