import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rc-calculator',
  server: {
    allowedHosts: ['.ngrok-free.app', '.ngrok.io', 'localhost', '.github.io']
  }
})
