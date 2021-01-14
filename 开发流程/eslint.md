# ESLint 知识点

## 资源

https://eslint.org/

https://www.clloz.com/programming/front-end/js/2020/08/31/prettier-eslint/


## 流程

### 一、安装依赖

**package.json**

```
    "@tencent/cm-bin": "~0.4.5",
    "@tencent/eslint-config-tencent": "^0.7.1",
    "@typescript-eslint/eslint-plugin": "^3.9.0",
    "@typescript-eslint/parser": "^3.9.0",
    "eslint": "^7.6.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-prettier": "^3.1.4",
    "husky": "^1.3.1",
    "lint-staged": "^8.2.1",
    "prettier": "^1.19.1"
```



### 二、安装vscode插件

![image-20201222202421024](/Users/zhichazhang/Library/Application Support/typora-user-images/image-20201222202421024.png)![image-20201222202606780](/Users/zhichazhang/Library/Application Support/typora-user-images/image-20201222202606780.png)

**ESLint**: 规范校验

**prettier**: 代码格式化



### 三、配置

**配置文件.eslintrc.js**

```js
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error', // 被prettier标记的地方抛出错误信息
    // 以下是自定义的规则
    '@typescript-eslint/no-require-imports': 'off', // 忽略no-require-imports规则
    '@typescript-eslint/prefer-optional-chain': 'off', // 忽略prefer-optional-chain规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 非开发模式禁用debugger
    'no-underscore-dangle': 'off',
    // 'operator-linebreak': 'error',
    // Windows换行符 'rc'
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'new-cap': 'off'
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
      }
    }
  ]
};

```







## 文件

### .eslintrc.js

配置文件



### .eslintignore

忽略文件





## 指令

### 忽略

- // eslint-disable-next-line
- 