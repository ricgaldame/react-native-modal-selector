module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    node: true,
  },
  plugins: ["babel", "import", "react", "react-native", "jsx-a11y", "prettier"],
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:react-native/all",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      restParams: true,
      spread: true,
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-react"],
    },
  },
  settings: {
    react: {
      version: "17",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react-native/no-color-literals": 0,
    "react-native/sort-styles": 0,
    "react-native/no-inline-styles": 1,
    "import/no-unresolved": [2, { ignore: ["react", "react-native"] }],
  },
};
