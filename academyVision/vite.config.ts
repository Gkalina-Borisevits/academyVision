import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/academyVision/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Устанавливает лимит предупреждения в 1000 кБ (по умолчанию 500)
  },
  server: {
    watch: {
      usePolling: true  // использование polling для отслеживания изменений файлов
    }
  }
})
