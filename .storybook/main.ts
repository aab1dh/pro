var path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-notes/register-panel',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@hover/storybook-addon-pseudo-states',
    'storybook-addon-designs',
    '@washingtonpost/storybook-addon-web-vitals',
    '@storybook/addon-jest',
    'storybook-mobile',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    // 'storybook-dark-mode/register', // turn off for custom theme
  ],
  framework: '@storybook/html',
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              [require('@babel/preset-react').default, { runtime: 'automatic' }],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.extensions.push('.mjs');

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url-loader',
    });

    config.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          // Need to add babel-loader as dependency: `yarn add -D babel-loader`
          loader: require.resolve('babel-loader'),
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });
    // 2b. Run `source-loader` on story files to show their source code
    //     automatically in `DocsPage` or the `Source` doc block.
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    return config;
  },
  babel: async options => ({ ...options, babelrc: false }),
};
