import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// import { readFileSync } from 'fs';
export const config: Config = {
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    openBrowser: true,
    // https: {
    //   cert: readFileSync('./ssl/dev.local.crt', 'utf8'),
    //   key: readFileSync('./ssl/dev.local.key', 'utf8')
    // }
  },
  namespace: 'pro',
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
    {
      type: 'www',
      baseUrl: 'https://localhost:4444/',
      serviceWorker: null, // disable service workers
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
