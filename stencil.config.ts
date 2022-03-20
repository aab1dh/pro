import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
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
      serviceWorker: null, // disable service workers
    },
  ], plugins: [
    sass({
      includePaths: ["./node_modules/"],
      injectGlobalPaths: [
        'src/global/variables.scss', //adds "@use 'src/global/variables.scss' as var" statement
        'src/global/mixins.scss', //root namespace, no prefix needed to access
        'src/global/animations.scss' //namespace defaults to 'animations',
      ]
    })
  ]
};
