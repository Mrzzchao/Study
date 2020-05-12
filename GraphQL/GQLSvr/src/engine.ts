import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";

export async function run(typeDefs, resolvers, requestStr) {
    
    const executableSchema = makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers
    });
    const result = await graphql(executableSchema, requestStr);
    console.log()
    return result;
}