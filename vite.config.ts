import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { visualizer } from "rollup-plugin-visualizer";
import { Plugin, UserConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "ui-library",
      /**
        Developer Insight:
        Using ES module format can cause overhead in tools like Jest, 
        which skips `node_modules` compilation by default. 
        This might lead to syntax errors during testing, 
        requiring adjustments like `transformIgnorePatterns`. 
        Providing both CommonJS (cjs) and ES module (es) builds 
        ensures broader compatibility and reduces setup complexities.
      */
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["@emotion/react", "@emotion/styled", /react.*/, /@mui\/.*/],
      output: {
        minifyInternalExports: false,
        globals: {
          "@emotion/react": "@emotion/react",
          "@emotion/styled": "@emotion/styled",
          "@mui/material": "@mui/material",
          react: "react",
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  publicDir: "../public",
  plugins: [
    react(),
    svgr(),
    visualizer({
      gzipSize: true,
      template: "network",
      open: false,
    }) as Plugin,
  ],
});
