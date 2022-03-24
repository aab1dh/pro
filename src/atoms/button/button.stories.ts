// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Atoms',
  parameters: {
    markdown: <HTMLAllCollection>readme,
  },
};

export const Button = () => `
  <pro-button first="Millie" middle="Bobby" last="Brown">Hello</pro-button>
`;
