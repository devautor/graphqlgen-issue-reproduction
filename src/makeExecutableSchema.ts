/**
 * Makes executable schema for Apollo server API
 * from typedefs and resolvers, and adds permissions middleware
 */

import { makeExecutableSchema } from "apollo-server";
import typeDefs from "./schema";
//import { resolvers } from "./resolvers";
// import all scalar resolvers
import OKGGraphQLScalars from "@okgrow/graphql-scalars";

import { applyMiddleware } from "graphql-middleware";
//import permissions from "./auth/permissions";

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    ...OKGGraphQLScalars
  }
});

// with auth permission middleware, using graphql-shield
export default () => {
  // console.log(`Applying permissions middleware...`);
  // return applyMiddleware(schema, permissions);
  return applyMiddleware(schema);
};
