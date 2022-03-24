import { action } from '@storybook/addon-actions';
import readme from './readme.md';
export default {
  title: 'Atoms',
  parameters: {
    markdown: <Text>readme,
  },
};

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const Button = () => `<pro-button ${(onclick = () => action('clicked')())}>Hello</pro-button>`;
