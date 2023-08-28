import order from "../../../entity/order"
import { OrderService } from "../../services/order";

export interface createOrders {
    product: string,
    person: string
}

export const mutations ={
    createOrder: async (_:any , payload: createOrders)=>{
      return  await OrderService.CreateMyService(payload);
        
    }
}