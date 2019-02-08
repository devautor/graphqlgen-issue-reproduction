// Graphql schema of the server API

import { gql } from "apollo-server";
// import all scalars
import { OKGScalarDefinitions } from "@okgrow/graphql-scalars";

import testSchema from "./test-schema";

const blankSchema = gql`
  type Query {
    _blank: String
  }

  type Mutation {
    _blank: String
  }

  type Subscription {
    _blank: String
  }
`;

const schema = [blankSchema, ...OKGScalarDefinitions, testSchema];

export default schema;
