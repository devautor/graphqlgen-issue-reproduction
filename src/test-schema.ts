import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    a: String
  }
`;

export default typeDefs;
