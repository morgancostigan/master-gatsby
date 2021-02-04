import React from 'react';
import usePizza from '../utils/usePizza';

 export default function PizzaOrder({ 
     order, 
     pizzas,
     removeFromOrder,
 }) {
    return (
        <>
            <p>Order!!!!!!!</p>
            <p>You've got {order.length} item{(order.length = 1) ? '' : 's'} in your order!</p>
            <p>You've got {order.length} items in your order!</p>
        </>
    )
 }