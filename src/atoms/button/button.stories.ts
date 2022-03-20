import { Meta, StoryFn } from '@storybook/html';
import { Button } from './button';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn = (): HTMLElement => { return new Button().render() };

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
};
