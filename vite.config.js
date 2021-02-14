import liveReload from 'vite-plugin-live-reload'
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue(),
    liveReload(__dirname+'/**/*.(php|inc|theme|twig)')
  ],

  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: [
        '/scss/styles.scss',
        '/js/main.js',
      ],
      // Remove the [hash] since Drupal will take care of that.
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },

  server: {
    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 12321,

    hmr: {
      host: 'localhost',
    }
  },

  resolve: {
    alias: {
      'jquery': '/js/jquery.module.js'
    },
  },
}
