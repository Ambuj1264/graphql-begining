import UserServices, { CreateUserPayload, UserId } from "../../services/user";

const queries = {
  loginUser: async (_: any, payload: { email: string; password: string }) => {
    return await UserServices.findUser(payload);

  
  },
  getAllUser: async (_: any, payload:{}) => {
    const fullData = await UserServices.findAllUser(payload);
    return fullData;
  },
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
