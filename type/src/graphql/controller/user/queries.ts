export const queries = `#graphql
loginUser(email: String!, password: String!): users
getAllUser:[users]
`;