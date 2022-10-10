import { UserInputError } from 'apollo-server-express';
import model from './model.js'

export default {
  Query: {
    users: (_, args) => model.GETUSER(args)
  },

  Mutation: {
    postUser: (_, args) => {
      if(args.username.length < 2){
        throw new UserInputError('username required')
      }
      const user = model.POSTUSER(args);
      return { status:201, message: 'new user added' }
    }
  }

}