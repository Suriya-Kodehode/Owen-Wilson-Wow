import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { base } from "./config"

// https://vite.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
})
