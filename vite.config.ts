import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import htmlMinifier from 'vite-plugin-html-minifier';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlMinifier({
      minify: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
        '/mongo': 'http://localhost:5000',
        '/mongo2': 'http://localhost:5000'
    }
  }
})
