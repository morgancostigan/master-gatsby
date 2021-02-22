import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
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

        setOrder([ ...order, orderedPizza]);
    };

    
    
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
        setLoading(true);
        setError(null);
        setMessage(null);
        //gather data to be sent
        const body = {
            order: attachNamesAndPrices(order, pizzas),
            total: calculateOrderTotal(order, pizzas),
            name: values.name,
            email: values.email,
            dreadPirateJimmy: values.dreadPirateJimmy,
        };
        //4. send data to a serverless func on checkout
        const res = await fetch(`${process.env.GATSBY_SERVER_BASE}/placeOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const text = JSON.parse(await res.text());
        //confirm that it worked
        if(res.status >= 400 && res.status < 600){
            setLoading(false);
            setError(text.message);
        } else {
            //it works
            setLoading(false);
            setMessage('Order placed successfully!')
        }
    };//end submitOrder func

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