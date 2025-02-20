import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for the src directory
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'), // Reference to your actual HTML entry
      output: {
        entryFileNames: 'static/[name].js',
        chunkFileNames: 'static/[name].js',
        assetFileNames: 'static/[name].[ext]',
      },
    },
    chunkSizeWarningLimit: 600, // Optional, adjust chunk size limit if necessary
  },
});
