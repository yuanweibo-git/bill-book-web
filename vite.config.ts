import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import styleimport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },

  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://120.25.223.52:7001/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 将 /api 重写为空
      },
    },
  },

  plugins: [
    react(),
    styleimport({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => {
            return `zarm/es/${name}/style/css`;
          },
        },
      ],
    }),
  ],
});
