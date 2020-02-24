module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    "no-unused-vars": [1, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],
    'no-undef': 'off',
  }
};