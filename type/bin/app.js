"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const app = (0, express_1.default)();
const port = process.env.port || 8000;
const init = async () => {
    app.get("/start", (req, res) => {
        res.status(200).json({
            message: "data is set"
        });
    });
    app.use(express_1.default.json());
    const gqlserver = new server_1.ApolloServer({
        typeDefs: `
        type Query {
             hello:String
             say(name:String):String
        }
        `,
        resolvers: {
            Query: {
                hello: () => "there is graghql server",
                say: (_, { name }) => `hey ${name},how are you`
            }
        }
    });
    await gqlserver.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(gqlserver));
};
init();
app.listen(port, () => {
    console.log("we are listening in port", port);
});
