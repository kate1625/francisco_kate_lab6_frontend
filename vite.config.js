import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const renderFrontendHost = process.env.RENDER_EXTERNAL_HOSTNAME || 'francisco-kate-lab6-frontend.onrender.com';
const renderPort = Number(process.env.PORT) || 4173;

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [renderFrontendHost],
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: renderPort,
    strictPort: true,
    allowedHosts: [renderFrontendHost],
  },
});
