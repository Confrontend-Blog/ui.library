import * as path from "path";

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { Plugin, UserConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: UserConfig = {
  build: {
    minify: false,
    emptyOutDir: false,
    outDir: "../lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "ui-library",
      formats: ["es"],
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
  plugins: [
    react(),
    svgr(),
    visualizer({
      gzipSize: true,
      template: "network",
      open: false,
    }) as Plugin,
  ],
};

export default config;
