import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function countPizzasForTopping(pizzas) {
    //return the toppings with counts
    //flat() turns an array of arrays into one large array
    //reduce take arguments accumulator and the topping
    const counts = pizzas.map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
        //1. check if topping exists
        const existingTopping = acc[topping.id];
        //2. if yes, increment 
        if (existingTopping) {
            console.log('ex top,', existingTopping.name);
            
            existingTopping.count += 1
        }
        //3. if no, create new entry in accumulator
        else {
            console.log('new top,', topping.name);
            acc[topping.id] = {
                id: topping.id,
                name: topping.name,
                count: 1,
            }
        };

        return acc;
    }, {}); 
    // sort by toping popularity
    const sortedToppings = Object.values(counts)
        .sort((a, b) => b.count - a.count);
    return sortedToppings;
}// end countPizzasForTopping

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