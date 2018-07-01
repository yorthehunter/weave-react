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
};
