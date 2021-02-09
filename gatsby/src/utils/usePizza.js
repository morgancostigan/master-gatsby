import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
    //1. create state that holds order    
    //vvv removed this after moving useState up to the Provider
    // const [order, setOrder] = useState([]);
    //vvv now we are accessing state and updater (order and setOrder) via context
    const [order, setOrder] = useContext(OrderContext);

    //2. make an add to order function    
    function addToOrder(orderedPizza) {
        console.log({ orderedPizza })
        console.log('previous order total', order);
        setOrder([ ...order, orderedPizza]);
    };
    // console.log('order', order);
    
    
    //3. make a remove function
    function removeFromOrder(index) {
        setOrder([
            //everything before this item we are removing
            ...order.slice(0, index),
            //everything after this item we are removing
            ...order.slice(index + 1), 
        ]); 
    };
    //4. send data to a serverless func on checkout
    //TODO
    return {
        order,
        addToOrder,
        removeFromOrder,
    };
}