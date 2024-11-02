import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, 
        jsxRuntime: 'automatic',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  
});
