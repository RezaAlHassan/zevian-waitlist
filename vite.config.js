import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import base44 from '@base44/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), base44()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
