import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';

export default function usePizza({ pizzas, values }) {
    //1. create state that holds order    
    //vvv removed this after moving useState up to the Provider
    // const [order, setOrder] = useState([]);
    //vvv now we are accessing state and updater (order and setOrder) via context
    const [order, setOrder] = useContext(OrderContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

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
    async function submitOrder(e) {
        e.preventDefault();
        console.log({e});
        setLoading(true);
        //gather data to be sent
        const body = {
            order,
            total: calculateOrderTotal(order, pizzas),
            name: values.name,
            email: values.email,
        };
        console.log({body});
        
    }

    //4. send data to a serverless func on checkout
    //TODO
    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder,
    };
}