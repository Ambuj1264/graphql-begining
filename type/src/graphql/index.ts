import { ApolloServer } from '@apollo/server';
import { User } from './controller/user';
import { Product } from './controller/product';


async function createApolloGraphqlServer(){
const gqlserver= new ApolloServer({
    typeDefs:`
    ${User.typeDefs}
    ${Product.typeDefs}
    type Query {
       ${User.queries}
       ${Product.queries}
    }
    type Mutation {
        ${User.mutations}
        ${Product.mutations}
     }
    `,
    resolvers:{
        Query: {
            ...User.resolvers.queries,
            ...Product.resolvers.queries,
          },
        Mutation: {
            ...User.resolvers.mutations,
            ...Product.resolvers.mutations
          },
    }
})

await gqlserver.start()
return gqlserver;
}


export default createApolloGraphqlServer;