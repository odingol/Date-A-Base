const resolvers = require('./schemas/resolvers');
const typeDefs = require('./schemas/typeDefs');
const {ApolloServer}= require('apollo-server-express');

const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

async function StartApollo () {
  const server = new ApolloServer({
  typeDefs, resolvers  
  })
  await server.start()
  server.applyMiddleware({app})
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
}

StartApollo ()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});











// BACKEND TASKS

// 
// 2)seed info (blank options + blank images)
// 3)routes
// 4)write out a comment for what functions we need

// FRONTEND TASKS

// 1)components pages / structure
// 2)write out a comment for what functions we need
// 3)ui options + state w/ Zakk


// SPRINKLES :D

// 1)gender option
// 2)different background
// 3)user profile settings (updating username and password)




















