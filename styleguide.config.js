const path = require('path');

module.exports = {
  styleguideDir: 'docs',
  skipComponentsWithoutExample: true,
  ignore: [
    '**/CollectionItem.jsx',
    '**/PopoverDisplay.jsx',
    '**/PopoverActivator.jsx',
    '**/DropdownMenu.jsx',
    '**/DropdownActivator.jsx',
  ],

  require: [
    path.resolve(__dirname, './setupStyleguidist.js'),
    path.join(__dirname, './node_modules/weave-ui/src/core/index.scss'),
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:
            {
              presets:['react']
            }
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader?precision=10',
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
  },
};
