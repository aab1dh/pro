/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { action } from '@storybook/addon-actions';
import readme from './readme.md';
export default {
  title: 'Atoms',
  parameters: {
    markdown: <Text>readme,
  },
  argTypes: {
    label: { control: 'text' },
  },
};

export const Button = (args: any) => `<pro-button ${(onclick = () => action('clicked')())}>${args.label}</pro-button>`;

Button.args = {
  label: 'Text button',
};
