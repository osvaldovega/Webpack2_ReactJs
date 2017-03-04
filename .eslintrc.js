module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser: "babel-eslint",
    "plugins": [
      "react"
    ],
    "extends": "airbnb",
    "rules": {
      "max-len": [1, 120, 2, {ignoreComments: true}],
      "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": 0,
    }
};
