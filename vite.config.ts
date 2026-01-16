import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        watch: {
            usePolling: true, // ファイル変更をポーリングで検知するようにする
            interval: 100,
        },
    },
})