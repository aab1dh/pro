/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { action } from '@storybook/addon-actions';
import readme from './readme.md';
import ButtonDocs from './button.docs.mdx';
import { withDesign } from 'storybook-addon-designs'
export default {
  title: 'Atoms',
  decorators: [withDesign],
  parameters: {
    markdown: <Text>readme,
    notes: <Text>readme,
    docs: {
      page: <Text>ButtonDocs
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    }
  },
  argTypes: {
    label: { control: 'text' },
  }
};

export const Button = (args: any) => `<pro-button ${(onclick = () => action('clicked')())}>${args.label}</pro-button>`;

Button.args = {
  label: 'Text button',
};
