module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-debugger": "warn",
        "no-extra-semi": "warn",
        "no-console": "error",
        "no-useless-escape": "off",
        "no-irregular-whitespace": "error",
        "class-methods-use-this": "warn",
        "curly": "warn",
        "eqeqeq": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-lone-blocks": "warn",
        "no-multi-spaces": "error",
        "no-useless-return": "error",
        "brace-style": "warn",
        "comma-spacing": "error",
        "comma-style": "warn",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multiple-empty-lines": "error",
        "no-unneeded-ternary": "error",
        "semi-style": "error",
        "space-before-function-paren": "warn"

    }
};