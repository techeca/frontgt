import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//const a = import.meta.env.MODE;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/'
})
