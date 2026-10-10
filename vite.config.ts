import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// GitHub Actions 部署 Pages 时注入 BASE_PATH=/<repo>/
// 本地构建 / 自定义域名部署保持 '/'
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [vue(), UnoCSS()],
})
