import { gql } from 'apollo-server-express';
import path from 'path';
import fs from 'fs';


import resolvers from './resolvers.js';
const schema = fs.readFileSync(path.resolve(process.cwd(), 'src', 'modules', 'user', 'schema.gql'))


export default {
  typeDefs: gql`${schema}`,
  resolvers
}