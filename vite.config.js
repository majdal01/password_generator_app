import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
      preprocessorOptions: {
        scss: {
          additionalData: (content, filename) => {
            // Avoid injecting into partials like _variables.scss to prevent circular imports.
            if (/\/_[^/]+\.scss$/.test(filename) || filename.endsWith('/index.scss')) {
              return content;
            }

            return `@use "/src/scss/variables" as *;\n@use "/src/scss/mixins" as *;\n@use "/src/scss/buttons" as *;\n${content}`;
          }
        }
      }
  }
})
