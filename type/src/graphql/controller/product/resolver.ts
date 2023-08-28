
import ProductServices, { CreateProductPayload, ProductDetails } from '../../services/product';
const queries = {
    product  : async (_: any, payload:ProductDetails) => {
      return await ProductServices.findProduct(payload);
    },
    getAllProduct: async (_: any, payload:{}) => {
      const fullData = await ProductServices.findAllProduct(payload);
      return fullData;
    },
  };
  const mutations= {
    createProduct: async (_: any, payload: CreateProductPayload ) => {
     return ProductServices.createProduct(payload);
      },
  }

  export const resolvers = { mutations, queries };