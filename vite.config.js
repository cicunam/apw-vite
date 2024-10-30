import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dynamicImport({
    filter(id) {
      // `node_modules` is exclude by default, so we need to include it explicitly
      // https://github.com/vite-plugin/vite-plugin-dynamic-import/blob/v1.3.0/src/index.ts#L133-L135
      if (id.includes('/node_modules/@cicunam/sd')) {
        return true
      }
    }
  })]
})
