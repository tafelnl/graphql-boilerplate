# graphql-boilerplate

## Overview

- [`apollo-server-express`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) based

## Features

### Packages

- [`babel`](https://github.com/babel/babel): A compiler for writing next generation JavaScript (ES.Next).
- [`eslint`](https://github.com/eslint/eslint): Find and fix problems in your JavaScript code
  - [`babel-eslint`](https://github.com/babel/babel-eslint): Allows you to lint ALL valid Babel code
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import): ESLint plugin with rules that help validate proper imports
- [`prettier`](https://github.com/prettier/prettier): An opinionated code formatter
- [`babel-plugin-root-import`](https://github.com/entwicklerstube/babel-plugin-root-import#readme): Add the opportunity to import modules by the root path
- [`nodemon`](https://github.com/remy/nodemon): for running development environment with hot reload
- [`pm2`](https://github.com/Unitech/pm2): for running production environment [1]

[1] pm2@3.5.1 to prevent problems with starting the server with `pm2-runtime`

### Architecture

- Module (domain) based setup
- Clean console logs

## Usage

- When a new domain is identified, add it to `/modules` folder
- `{domain}.dao.js` should be used for shortcuts to the database other than the already existing default CRUD operations. E.g. `listByTitle`
- `{domain}.graphql` is self-explaining
- `{domain}.resolvers.js` is meant to host the resolvers for the Queries, Mutations, Subscriptions and Model related to that specific domain.
- `{domain}.service.js` acts as an abstraction for the `resolvers.js`. This way those methods can be easily used in other modules.

### Examples

#### Example queries

```
query {
  books(input: { author: { name: "M" } }) {
    id
    title
    ranking
    stars
    featured
    shouldRead
    author {
      id
      name
    }
  }
}
```

### Discussion

- Use of a `{domain}.model.js` file.

## Serve / deploy

- Every file ending with `.graphql` / `.resolvers.js` in the `modules` folder will automatically be bundled in the GraphQL schema (magic happens in `schema.js`)

### Development

- Run `npm install`
- Run `npm run dev`
- Enjoy!

### Production

- Run `npm install`
- Run `npm build`
- Run `npm run start` or `npm run start-docker`
- Enjoy!
