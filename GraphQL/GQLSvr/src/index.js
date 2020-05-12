const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    printSchema,

    printType,
    // Prints the built-in introspection schema in the Schema Language
    // format.
    printIntrospectionSchema,
    // Create a GraphQLType from a GraphQL language AST.
    typeFromAST,
    // Create a JavaScript value from a GraphQL language AST with a Type.
    valueFromAST,
    // Create a JavaScript value from a GraphQL language AST without a Type.
    valueFromASTUntyped,
    // Create a GraphQL language AST from a JavaScript value.
    astFromValue,

    GraphQLInputObjectType,
    parse,
    parseValue,
    parseType,
} = require("graphql");
  
const makeSchema = () => {
    return new GraphQLSchema({
        query: new GraphQLObjectType({
            name: "Query",
            fields: {
                get: {
                    type: makeType()
                }
            }
        }),
    })
}

const makeInputType = (field) => {
    var inputType = new GraphQLInputObjectType({
        name: 'inputType',
        fields: {
            street: { type: GraphQLString },
            number: { 
                type: GraphQLInt,
            },
        },
        description: 'test222',
    });

    return inputType
}

const makeType = (field) => {
    var AddressType = new GraphQLObjectType({
        name: 'Address',
        fields: {
            street: { type: GraphQLString },
            number: { 
                type: GraphQLInt,
                args: {
                    test: {
                        type: makeInputType()
                    }
                    
                }
            },
        },
        // description: 'test',
    });
    return AddressType
}
function test(schema) {
    console.log('schema', schema);
    const type = makeType()
    const typeString = printType(type)
    console.log('=========================');
    console.log('typeString', typeString);
    const parseTypeObj = parseValue(typeString)
    console.log('parseTypeObj', parseTypeObj);


    // const input = makeInputType()
    // const inputString = printType(input)
    // console.log('=========================');
    // console.log('inputString', inputString);

    // const schemaString = printSchema(schema);
    // console.log('=========================');
    // console.log('schemaString', schemaString);

    // // const c = typeFromAST(type)
    // // console.log('c', c);

    // const parsed = parse(schemaString);
    // console.log('parsed', parsed);
}

test(makeSchema());