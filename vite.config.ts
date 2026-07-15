import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk — React runtime only
          'vendor-react': ['react', 'react-dom'],
          // Chunk for all blog pages (loaded lazily on navigation)
          'pages-blog': [
            './src/pages/blog/days-challenge/day1Page',
            './src/pages/blog/days-challenge/day2Page',
            './src/pages/blog/days-challenge/day3Page',
            './src/pages/blog/days-challenge/day4Page',
            './src/pages/blog/days-challenge/day5Page',
            './src/pages/blog/days-challenge/day6Page',
            './src/pages/blog/html-modul/html1Page',
            './src/pages/blog/html-modul/html2Page',
            './src/pages/blog/css-modul/css1Page',
            './src/pages/blog/css-modul/css2Page',
            './src/pages/blog/css-modul/css3Page',
            './src/pages/blog/css-modul/css4Page',
            './src/pages/blog/js-modul/js1Page',
            './src/pages/blog/js-modul/js2Page',
            './src/pages/blog/js-modul/js2SolutionPage',
            './src/pages/blog/js-modul/js3Page',
            './src/pages/blog/js-modul/js3SolutionPage',
            './src/pages/blog/js-modul/js4Page',
            './src/pages/blog/js-modul/js4SolutionPage',
            './src/pages/blog/js-modul/js5Page',
            './src/pages/blog/js-modul/js5SolutionPage',
            './src/pages/blog/js-modul/js6Page',
            './src/pages/blog/js-modul/js6SolutionPage',
            './src/pages/blog/js-modul/js7Page',
            './src/pages/blog/BlogPage',
          ],
          // Chunk for projects page
          'pages-projects': [
            './src/pages/projects/ProjectsPage',
            './src/pages/projects/ProjectDetailModal',
          ],
        },
        // Inline small assets as base64 to reduce HTTP requests
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Compress generated assets with Gzip/Brotli
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
