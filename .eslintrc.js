module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  // "off" or 0 - 关闭(禁用)规则
  // "warn" or 1 - 将规则视为一个警告（并不会导致检查不通过）
  // "error" or 2 - 将规则视为一个错误 (退出码为1，检查不通过)
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
