import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// import { readFileSync } from 'fs';
export const config: Config = {
  namespace: "Pro",
  invisiblePrehydration: true,
  hashFileNames: true,
  sourceMap: false,
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    openBrowser: true,
    // https: {
    //   cert: readFileSync('./ssl/dev.local.crt', 'utf8'),
    //   key: readFileSync('./ssl/dev.local.key', 'utf8')
    // }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
      baseUrl: 'https://prodevsca.github.io/',
      prerenderConfig: './prerender.config.ts',
      buildDir: '',
      serviceWorker: null, // disable service workers
      // serviceWorker: {
      //   globPatterns: [
      //     '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
      //   ]
      // },
    },
  ], plugins: [
    sass({
      includePaths: ["./node_modules/"],
      injectGlobalPaths: [
        'src/styles/variables.scss', //adds "@use 'src/styles/variables.scss' as var" statement
        'src/styles/mixins.scss', //root namespace, no prefix needed to access
        'src/styles/animations.scss' //namespace defaults to 'animations',
      ]
    })
  ]
};
