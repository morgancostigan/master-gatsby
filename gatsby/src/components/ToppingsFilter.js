import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function countPizzasForTopping(pizzas) {
    //return the toppings with counts
    //flat() turns an array of arrays into one large array
    return pizzas.map((pizza) => pizza.toppings).flat(); 
    
    
}

export default function ToppingsFilter() {
    //1. get a list of all toppings
    //2. get a list of all pizzas with their toppings
    const { toppings, pizzas } = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
                    id
                    name
                    vegetarian
                }
            }
            pizzas: allSanityPizza {
                nodes {
                    toppings {
                        name
                        id
                    }
                }
            }
        }
    `)
    console.clear();
    //3. count how many pizzas have eacch topping
    const toppingsWithCounts = countPizzasForTopping(pizzas.nodes);
    console.log({toppingsWithCounts});
    
    //4. loop over topping list and display topping name and pizza count for each
    //5. Link it
    return <div>
        <p>Toppins</p>
    </div>
}