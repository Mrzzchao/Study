module.exports = {
  plugins: ['prettier'],
  extends: [
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
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
        endOfLine: 'auto',
      },
    ],
    'new-cap': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
