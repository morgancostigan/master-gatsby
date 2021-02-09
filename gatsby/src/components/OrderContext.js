import React, { useState } from 'react';

//create an order context
const OrderContext = React.createContext();

//create a provider
export function OrderProvider({ children }){
    //put state in here
    const [order, setOrder] = useState([ ]);
    return <OrderContext.Provider value={[order, setOrder]}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext;
 