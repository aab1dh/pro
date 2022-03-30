/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { action } from '@storybook/addon-actions';
import readme from './readme.md';
import ButtonDocs from './button.docs.mdx';
import { withDesign } from 'storybook-addon-designs';
import PropTypes from 'prop-types';
export default {
  title: 'Atoms',
  decorators: [withDesign],
  parameters: {
    markdown: <Text>readme,
    notes: <Text>readme,
    docs: {
      page: <Text>ButtonDocs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    label: { control: 'text' },
  },
  actions: {
    handles: ['click'],
  },
};

const Template = (args: typeof propTypes) =>
  `<pro-button ${{ ...args }} ${(onclick = () => action('clicked')())}>${args.label}</pro-button>`;

export const Button = Template.bind({});

Button.args = {
  ...Button.args,
  label: 'Text button',
};

const propTypes = {
  label: PropTypes.string,
};
