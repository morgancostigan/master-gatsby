import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
    //1. create state that holds order    
    const [order, setOrder] = useState([]);
    //2. make an add to order function    
    function addToOrder(orderedPizza) {
        console.log({ orderedPizza })
        console.log('previous order total', order);
        setOrder([...order, orderedPizza]);
    };
    console.log('order', order);
    
    
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