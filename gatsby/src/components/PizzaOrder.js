import React from 'react';

export default function PizzaOrder({ 
    order,
    pizzas,
    removeFromOrder
 }) {
  return (
    <>
          <p>You've got {order.length} item{(order.length === 1) ? '' : 's'} in your order!</p>
      {order?.map((item) => (
        <p>{item.id}</p>
      ))}
    </>
  );
}

