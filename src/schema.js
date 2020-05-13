import chalk from 'chalk';
import fs from 'fs';
import { join } from 'path';
import merge from 'lodash.merge';
import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const defaultTypeDef = gql`
  type Query
  type Mutation
`;
const defaultResolvers = {};

const typeDefs = [defaultTypeDef];
const resolvers = [defaultResolvers];

const modulesFolder = 'modules';
const typeDefFileEnd = '.graphql';
const resolversFileEnd = '.resolvers.js';

fs.readdirSync(join(__dirname, modulesFolder)).forEach((folder) => {
  const path = join(__dirname, modulesFolder, folder);
  const isFolder = fs.lstatSync(path).isDirectory();
  if (isFolder) {
    fs.readdirSync(path)
      .filter((file) => {
        return (
          file.indexOf('.') !== 0 &&
          (file.slice(-typeDefFileEnd.length) === typeDefFileEnd ||
            file.slice(-resolversFileEnd.length) === resolversFileEnd)
        );
      })
      .forEach((file) => {
        const path = join(__dirname, modulesFolder, folder, file);
        const isTypeDef = file.slice(-typeDefFileEnd.length) === typeDefFileEnd;
        if (isTypeDef) {
          const typeDef = fs.readFileSync(path, 'utf-8');
          typeDefs.push(typeDef);
        } else {
          const resolver = require(path).default;
          resolvers.push(resolver);
        }
        console.log('[GraphQL] Added ', file);
      });
  }
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(...resolvers),
});

console.log(chalk.green('[GraphQL] Successfully generated executable schema'));

export default schema;
