import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      include: [
        'crypto',
        'http',
        'https',
        'stream',
        'util',
      ],
    }),
    react(),
    checker({
      typescript: true, // Perform type checking.
    }),
  ],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 8 * 1024,
  },
  server: {
    port: 3000,
    open: true,
  },
});
