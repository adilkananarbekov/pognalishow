import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Project Pages URL: https://adilkan.com/pognalishow/ (or user.github.io/pognalishow/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/pognalishow/',
})
