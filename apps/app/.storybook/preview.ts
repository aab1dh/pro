import { configure } from '@storybook/html';
import buildStencilStories from './automatedStories';

const loader = require('../loader/index.cjs.js');

import { themes } from '@storybook/theming';
import { withTests } from '@storybook/addon-jest';

import results from '../../../.jest-test-results.json';

import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

export const decorators = [
  withTests({
    results,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    // Set the initial theme
    current: 'light',
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' },
  },
};

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
  module.hot.accept(() => configure(loadStories, module));
}
