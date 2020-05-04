# graphql-boilerplate

## Overview

* `apollo-server-express` based

## Features

* Babel (ES2020)
* ESLint (babel-node as parser)
* [`link-module-alias`](https://github.com/Rush/link-module-alias): Enables aliases
* Module (domain) based setup
* Clean console logs

## Usage

* Every file ending with `.graphql` / `.resolvers.js` in the `modules` folder will automatically be bundled in the GraphQL schema (magic happens in `schema.js`)
* `npm run dev`
* Enjoy!
