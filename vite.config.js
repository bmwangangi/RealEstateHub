import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),      // React plugin
    tailwindcss() // Tailwind CSS plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Use '@' as a shortcut for 'src'
    }
  }
})
