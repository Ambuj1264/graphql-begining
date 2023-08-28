
export const typeDefs= `
type users{
    id: ID!
    firstName:String
    lastName:String
    email: String
    password: String
}
 type tokenWithUser {
    token: String
    findMyUser: users
 }
`;
