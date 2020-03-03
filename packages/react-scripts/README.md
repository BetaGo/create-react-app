# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

You can add `background.js`, `content_script.js` to run scripts,
adn add `options.js`, `popup.js` to render Options Page and Popup Page;

if you use `typescript` template follow the step below:

1. Locate react-app-env.d.ts in the src folder of your CRA project
2. Rename `/// <reference types="react-scripts" />` to `/// <reference types="your-custom-published-react-scripts-name-here" />`

Reference issue: [create-react-app#5875](https://github.com/facebook/create-react-app/issues/8223)
