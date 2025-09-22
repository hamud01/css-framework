import {resolve} from 'node:path'
import {defineConfig} from 'vite'


export default defineConfig({
  resolve: {
    alias: {
      '@config': resolve(__dirname, 'src', 'config'),
      '@base': resolve(__dirname, 'src', 'base'),
      '@mixins': resolve(__dirname, 'src', 'mixins'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@shared': resolve(__dirname, 'src', 'shared'),
      '@functions': resolve(__dirname, 'src', 'functions'),
    }
  }
})