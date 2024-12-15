import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/students': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true, // Alters the host header to match the target
        rewrite: (path) => path.replace(/^\/students/, '/students') // Optional rewrite if necessary
      }
    }
  }
});
