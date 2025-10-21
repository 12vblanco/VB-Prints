// vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
  
  server: {
    fs: {
      allow: ['.'] // Allow current working directory
    }
  },
  
  publicDir: 'public',
  
  build: {
    rollupOptions: {
      external: [/\.env/, /config\/secrets/]
    }
  },
  
  // Optimize for styled-components
  optimizeDeps: {
    include: ['styled-components']
  }
})