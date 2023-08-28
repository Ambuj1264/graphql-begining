import order from "../../../entity/order"

export interface createOrders {
    product: string,
    order: string
}

const mutations ={
    createOrder: async (_:any , payload: createOrders)=>{
        const createmyOrder = await OrderService.CreateMyService(payload);
        
    }
}