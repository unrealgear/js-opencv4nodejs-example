module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "semi": [2, "always"],
        "no-trailing-spaces": [2, {"skipBlankLines": true}]
    }
};
