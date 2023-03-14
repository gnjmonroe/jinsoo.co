module.exports = {
  globals: {
    __dirname: true,
  },
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["next/core-web-vitals", "airbnb-base", "prettier"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [".eslintrc.*", "node_modules/*"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "react/prop-types": 0,
    "no-param-reassign": ["error", { props: false }],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    // "@next/next/no-html-link-for-pages": ["error", "/jinsoo.co/pages"]
  },
};
