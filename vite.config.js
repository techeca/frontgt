/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults, coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    exclude: [...configDefaults.exclude, 
      '**/server.js/**', 
      '**/postcss.config.js/**', 
      '**/tailwind.config.js/**', 
      '**/entry-server.jsx/**',
      '**/index2.jsx/**',
      '**/e2e/**',
      '**/tests-examples/**'],
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, 
        '**/server.js/**', 
        '**/postcss.config.js/**', 
        '**/tailwind.config.js/**', 
        '**/entry-server.jsx/**',
        '**/index2.jsx/**',
        '**/e2e/**',
        '**/tests-examples/**']
    }
  },
})
