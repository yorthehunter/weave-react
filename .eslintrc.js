module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/forbid-prop-types": "off",
      "arrow-parens": "off",
      "no-else-return": "off",
      "import/extensions": "never",
    },
    "env": {
      "jest": true
    },
    "globals": {
      "document": true,
      "window": true
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": [
            "app/javascript",
            "node_modules"
          ]
        }
      }
    }
};
