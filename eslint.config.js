import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				parser: "@typescript-eslint/parser",
			},
		},
		plugins: {
			pluginVue,
		},
		rules: {
			"no-unused-vars": "error",
			"@typescript-eslint/no-empty-interface": [
				"warn",
				{ allowSingleExtends: true },
			],
			"no-undef": "error",
			"no-console": "error",
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
];
