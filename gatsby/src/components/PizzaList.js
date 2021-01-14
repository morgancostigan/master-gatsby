import React from 'react';

function SinglePizza({pizza}) {
    return <p>{pizza.name}</p>
    
}

export default function PizzaList({pizzas}) {
    return <div>
        {pizzas.map((pizza) => (
            <SinglePizza key={pizza.id} pizza={pizza}/>
        ))}
    </div>
}