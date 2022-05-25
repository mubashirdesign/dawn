# Noticed Boilerplate

## 🧐 About

A customizable modular development environment for Shopify theme creation. 

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Features

- Shopify
    - Integrates with the [Shopify CLI](https://shopify.dev/themes/tools/cli)
    - Online Store 2.0 support
- CSS
    - [Tailwind CSS](https://tailwindcss.com)
    - [PostCSS](https://postcss.org) with [postcss-preset-env](https://preset-env.cssdb.org/features)
    - Preprocessor support: [SASS / SCSS](https://sass-lang.com),
- Workflow
    - [Webpack](https://webpack.js.org)
    - [Babel](https://babeljs.io)
    - [Browserslist](https://github.com/browserslist/browserslist)
    - [Autoprefixer](https://github.com/postcss/autoprefixer)


### Prerequisites

- [Shopify CLI](https://shopify.dev/themes/tools/cli/installation) >= `2.0.0`
- [Node.js](https://nodejs.org/en) >= `14.0.0`

### Installing

1. Install the [Shopify CLI](https://github.com/Shopify/shopify-cli) by following [these steps](https://shopify.dev/themes/tools/cli/installation).

2. Install dependencies and run the `start` task:
```sh
$ yarn install
$ yarn start
```

## Deploying
Create and deploy to a new theme on the store that you're connected to:
```sh
$ yarn deploy:new
```

Deploy to an existing theme on the store that you're connected to:
```sh
$ yarn deploy
```

> ⚠ The deploy task overrides all files of the remote theme! If any changes were made through the Shopify theme editor you might want to download the theme files before deploying:

1. Make sure you have a clean git history and committed all files.

2. Run the `shopify:pull` command:
```sh
$ yarn shopify:pull
```

3. Revert any files that were pulled and you don't need e.g. Because you already have a newer version.