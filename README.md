# graphql-boilerplate

## Overview

- [`apollo-server-express`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) based

## Features

- Babel (ES2020)
- ESLint (babel-node as parser)
- Prettier.io: code formatter
- [`link-module-alias`](https://github.com/Rush/link-module-alias): Enables aliases
- Module (domain) based setup
- Clean console logs

## Usage

- When a new domain is identified, add it to `/modules` folder
- `{domain}.dao.js` should be used for shortcuts to the database other than the already existing default CRUD operations. E.g. `listByTitle`
- `{domain}.graphql` is self-explaining
- `{domain}.resolvers.js` is meant to host the resolvers for the Queries, Mutations, Subscriptions and Model related to that specific domain.
- `{domain}.service.js` acts as an abstraction for the `resolvers.js`. This way those methods can be easily used in other modules.

### Discussion

- Use of a `{domain}.model.js` file.

## Serve / Deploy

- Every file ending with `.graphql` / `.resolvers.js` in the `modules` folder will automatically be bundled in the GraphQL schema (magic happens in `schema.js`)
- Run `npm install`
- Run `npm run dev`
- Enjoy!
