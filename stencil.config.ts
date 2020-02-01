import { Config } from "@stencil/core";
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: "vanilla",
  srcIndexHtml: "demo/index.html",
  // globalScript: "demo/app.ts",
  globalStyle: "demo/app.css",
  outputTargets:[
    { type: "dist" },
    { type: "docs" },
    {
      type: "www",
      serviceWorker: null // disable service workers,
      
    }
  ],
  plugins: [
    sass()
  ]
};
