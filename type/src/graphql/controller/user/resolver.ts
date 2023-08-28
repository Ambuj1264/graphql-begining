import UserServices, { CreateUserPayload, UserId, filterKey } from "../../services/user";

const queries = {
  loginUser: async (_: any, payload: { email: string; password: string }) => {

    const mydata= await UserServices.findUser(payload);
    console.log(mydata);
    return mydata;

  
  },
  getAllUser: async (_: any, payload:{}) => {
    const fullData = await UserServices.findAllUser(payload);
    console.log(fullData);
    return fullData;
  },
  filterUser:async (_: any, payload:filterKey )=>{
    const res= await UserServices.filterUser(payload);
    return res;
   }
};
const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserServices.createUser(payload);
    return res;
  },
  deleteUser: async (_: any, payload: UserId) => {
    const res = await UserServices.deleteUser(payload);
    return res;
  },
   
  
};

export const resolvers = { mutations, queries };
