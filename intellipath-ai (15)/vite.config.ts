import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify("AIzaSyAhd8sSZk1Vandoa2Vzv2_XU6_wjW5AHyY"),
        'process.env.GEMINI_API_KEY': JSON.stringify("AIzaSyAhd8sSZk1Vandoa2Vzv2_XU6_wjW5AHyY")
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
