import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: '/B10A7-Assignment-7/',
  plugins: [react(),
    tailwindcss(),
  ],
})
