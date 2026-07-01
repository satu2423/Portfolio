import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset paths work correctly on subpaths like GitHub Pages
});
