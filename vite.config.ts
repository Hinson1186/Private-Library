
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    // 這裡必須與您的 GitHub 儲存庫名稱完全一致，大小寫也要對
    base: '/Private-Library/',
    resolve: {
      alias: {
        '@': '/',
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})
