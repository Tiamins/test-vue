module.exports = {
  root: true,
  end: {
    browse: true,
  },
  extends: [
    "eslint: recommended",
    "plugin: vue/recommended",
    "plugin: prettier/recommended",
    "prettier/vue",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", 
    "prettier/prettier": [
      "error",
      {endOfLine: "auto"},
    ],
    "vue/html-self-closing": "error",
  },

}