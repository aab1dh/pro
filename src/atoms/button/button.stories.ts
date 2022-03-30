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
    },
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    label: { control: 'text' }
  },
};

const Template = args => `<pro-button ${{ ...args }} ${(onclick = () => action('clicked', { "clearOnStoryChange": false })())}>${args.label}</pro-button>`;


export const Button = Template.bind({});

Button.args = {
  ...Button.args,
  label: 'Text button'
};
