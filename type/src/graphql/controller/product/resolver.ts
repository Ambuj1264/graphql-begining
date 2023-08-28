
import ProductServices, { CreateProductPayload, ProductDetails } from '../../services/product';
const queries = {
    product  : async (_: any, payload:ProductDetails) => {
      return await ProductServices.findProduct(payload);
    },
    getAllProduct: async (_: any, payload:{}, context : any) => {
      if (context && context.user) {
      const fullData = await ProductServices.findAllProduct(payload);
      return fullData;
    }
    else{
      throw new Error("I dont know who are you");
    }
  },
  };
  const mutations= {
    createProduct: async (_: any, payload: CreateProductPayload ) => {
     return ProductServices.createProduct(payload);
      },
  }

  export const resolvers = { mutations, queries };