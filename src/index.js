import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './mocks'
import Query from './graphql/resolvers/Query'
import Mutation from './graphql/resolvers/Mutation'
import Post from './graphql/resolvers/Post'
import User from './graphql/resolvers/User'
import Subscription from './graphql/resolvers/Subscription'
/*
    Scalar types String, Boolean, Int, Float, ID
    Custom types {Schemas} (objetos que podemos definir)
    Definicion de tipos {schema}
*/

const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs: './src/graphql/schemas.graphql',
    resolvers: { 
        Query,
        Mutation,
        Subscription,
        Post,
        User
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {    
    console.log(`Server running in http://localhost:${server.options.port} ...`)
})