import { makeExecutableSchema } from "@graphql-tools/schema";

import userModel from './user/index.js';
import types from "./types/index.js";

export default makeExecutableSchema({
  typeDefs: [
    userModel.typeDefs,
    types.typeDefs
  ],
  resolvers: [
    userModel.resolvers,
    types.resolvers
  ]
})