module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser: "babel-eslint",
    "plugins": ["react"],
    "extends": "eslint:recommended",
    "rules": {
      "max-len": [1, 120, 2, {ignoreComments: true}],
      "indent": ["error","tab"],
      "linebreak-style": ["error","windows"],
      "quotes": ["error","single"],
      "semi": ["error","always"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-unused-vars": 0,
    }
};
