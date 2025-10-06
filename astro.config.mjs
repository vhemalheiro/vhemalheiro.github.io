// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import site from 'c:/Repositories/github-action-site/site.json';

// https://astro.build/config
export default defineConfig({
  site: site.page,
  vite: {    
    plugins: [tailwindcss()],  
  },
});