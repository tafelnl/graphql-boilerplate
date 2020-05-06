require('dotenv').config();

const os = require('os');
const chalk = require('chalk');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const schema = require('./schema');

const apolloServer = new ApolloServer({
  schema: schema,
  introspection: true,
  playground: true,
  context: async ({ res, req }) => {
    return { res, req, user: {} };
  },
});

const app = express();
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
};
app.use(cors(corsOptions));

apolloServer.applyMiddleware({
  app,
  path: '/api',
  cors: false, // use express cors instead
});

const port = process.env.PORT || 4000;

app.listen({ port }, () => {
  const ip = os.networkInterfaces()['Wi-Fi']?.[1]?.address;

  const bgGreen = (string) => {
    return `\x1b[30m\x1b[42m${string}\x1b[0m`;
  };

  console.log();
  console.log(`${bgGreen(' DONE ')}`, chalk.green('Compiled successfully'));

  console.log(chalk`
  Server running at:
  - Local:   {cyan http://localhost:${port}${apolloServer.graphqlPath}}
  - Network: {cyan http://${ip}:${port}${apolloServer.graphqlPath}}
  Websocket running at:
  - Local:   {cyan http://localhost:${port}${apolloServer.subscriptionsPath}}
  - Network: {cyan http://${ip}:${port}${apolloServer.subscriptionsPath}}
  `);
});

module.exports = app;
