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

console.log('components', COLLECTIONS[1].componentsCtx.keys());
console.log('stories', COLLECTIONS[0].storiesCtx.keys());

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    console.log('build step name', name);
    console.log('build step', componentsCtx.keys());
    console.log('build step2', storiesCtx.keys());
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);

if (module.hot) {
  module.hot.accept(() => configureStorybook(loadStories));
}
