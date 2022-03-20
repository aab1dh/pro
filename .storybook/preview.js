import { configure } from '@storybook/html';
import buildStencilStories from './automatedStories';

const loader = require('../loader/index.cjs.js');

const COLLECTIONS = [
  {
    name: 'Atoms',
    componentsCtx: require.context('../dist/collection', true, /\/atoms\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src/atoms', true, /\.stories\.ts$/),
  },
  {
    name: 'Molecules',
    componentsCtx: require.context('../dist/collection', true, /\/molecules\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src/molecules', true, /\.stories\.ts$/),
  },
];

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);

if (module.hot) {
  module.hot.accept(() => configureStorybook(loadStories));
}
