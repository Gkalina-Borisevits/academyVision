import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/academyVision/',
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Убирает все console.log из финального кода
      },
    },
  },
  server: {
    watch: {
      usePolling: true  // использование polling для отслеживания изменений файлов
    }
  }
})
