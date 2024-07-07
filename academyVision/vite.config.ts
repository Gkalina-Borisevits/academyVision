import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/academyVision/',
    plugins: [react()],
    server: {
        watch: {
            usePolling: true  // использование polling для отслеживания изменений файлов
        }
    }
})
