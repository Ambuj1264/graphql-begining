import { product } from "../../entity/product";

export interface CreateProductPayload {
    productName: string;
    count: number;
    price: number;
   
  }
  export interface ProductDetails {
  productName: string
  }

  class ProductServices{
    public static async createProduct(payload: CreateProductPayload) {
        const { productName, count, price } = payload;
       return  product.create({
          productName,
          price,
          count,     
        });
     
      }

      public static async findAllProduct(payload: any) {
        const findAllData = await product.find(payload);
        return findAllData;
      }
      public static async findProduct(payload:ProductDetails ) {
        const { productName } = payload;
        return await product.findOne({
         productName
        });
    
  }
}
  export default ProductServices
