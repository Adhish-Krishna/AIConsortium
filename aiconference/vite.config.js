import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aispectrum/', 
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Add this line to include JPG files with uppercase extension
})
