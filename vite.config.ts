import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Custom domain URL: https://adilkan.com/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
