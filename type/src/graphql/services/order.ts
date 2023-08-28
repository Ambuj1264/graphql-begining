import { createOrders } from './../controller/order/resolver';
import order from "../../entity/order";


export class OrderService{
    public static async CreateMyService(payload:createOrders ) {
        const { product, person } = payload;
       return  order.create({
          product,
          person,
       
        });
     
      }

    
}