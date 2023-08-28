export const queries = `#graphql
loginUser(email: String!, password: String!): tokenWithUser
getAllUser:[users],
filterUser(search:String!): [users]
`;