/** @format */

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // 禁用 require 导入规则
      '@typescript-eslint/no-require-imports': 'off',
      //表示 ESLint 不会再检查 TypeScript 代码中是否有未使用的变量，也不会对此发出警告或错误。
      '@typescript-eslint/no-unused-vars': 'off',
      //表示 ESLint 不会再警告或报错关于使用 `any` 类型的代码。
      '@typescript-eslint/no-explicit-any': 'off',
      // 关闭 no-img-element 规则
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
