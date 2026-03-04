import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

const copy404Plugin = () => {
  return {
    name: 'copy-404-plugin',
    closeBundle() {
      fs.copyFileSync('dist/index.html', 'dist/404.html');
      console.log('Copied index.html to 404.html for GitHub Pages SPA routing.');
    }
  }
}

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/',
})