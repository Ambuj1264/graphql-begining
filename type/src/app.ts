
import express, { Request, Response } from "express";

import { expressMiddleware } from '@apollo/server/express4';

import "./database/db"
import cors from 'cors';
import createApolloGraphqlServer from "./graphql";
import UserServices from "./graphql/services/user";
    const app = express();

    const port = process.env.port || 8000
    const init=async()=>{

    app.get("/start",(req:Request,res:Response)=>{
        res.status(200).json({
            message:"data is set"
        })

    })
    app.use(express.json())
    app.use(cors())
  

    app.use("/graphql",expressMiddleware(await createApolloGraphqlServer(), {
        context: async ({ req }) => {
          // @ts-ignore
          const token = req.headers["token"];
       
  
          try {
            const user =await UserServices.decodeJWTToken(token as string);
            console.log(user);
            return { user };
          } catch (error) {
            return {};
          }
        },
      }) )
  
}
init()
 
app.listen(port,()=>{
    console.log("we are listening in port",port);
})