import { configure } from '@storybook/html';
import buildStencilStories from './automatedStories';

const loader = require('../loader/index.cjs.js');

const COLLECTIONS = [
  {
    name: 'My Components',
    componentsCtx: require.context('../dist/collection', true, /\/atoms\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.stories\.ts$/),
  },
];

console.log('components', COLLECTIONS[0].componentsCtx.keys());
console.log('stories', COLLECTIONS[0].storiesCtx.keys());

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);
