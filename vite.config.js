import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  server : {
    proxy: {
      '/api' : {
        target: 'https://backend-de1i.vercel.app/', 
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      } 
    }
  }
})
