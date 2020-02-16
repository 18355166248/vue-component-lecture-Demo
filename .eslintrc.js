module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  // 0:不处理  1:警告  2:报错并退出
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": "off",
    "singleQuote": "off",
    // "comma-dangle": [2, "always"],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
