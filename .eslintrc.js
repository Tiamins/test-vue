module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint: recommended',
    'plugin: vue/recommended',
    'plugin: prettier/recommended',
    'prettier/vue',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}