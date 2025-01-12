import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path is correct for your app
  build: {
    outDir: 'dist', // Ensure output directory is correct
  },
})
