import React from 'react';

export default function PizzaOrder({ order }) {
  return (
    <>
      {order?.map((item) => (
        <p>{item.id}</p>
      ))}
    </>
  );
}
