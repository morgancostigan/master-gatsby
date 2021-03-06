import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid; 
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        font-size: clamp(1.5rem, 1.5vw, 2.5rem);
        .count {
            background: white;
            padding: 2px 5px;
        }
        &[aria-current='page'] {
            background: var(--yellow);
        }
    }
`;

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
            existingTopping.count += 1
        }
        //3. if no, create new entry in accumulator
        else {
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

export default function ToppingsFilter({activeTopping}) {
    //1. get a list of all toppings
    //2. get a list of all pizzas with their toppings
    const { pizzas } = useStaticQuery(graphql`
        query {
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
    //3. count how many pizzas have eacch topping
    const toppingsWithCounts = countPizzasForTopping(pizzas.nodes);
    
    //5. Link it
    return (
        <ToppingsStyles>
            <Link to="/pizzas">
                <span className="name">All</span>
                <span className="count">{pizzas.nodes.length}</span>
            </Link>
            {/* //4. loop over topping list and display topping name and pizza count for each */}

            {toppingsWithCounts.map(topping => (
                <Link 
                    to={`/topping/${topping.name}`} 
                    key={topping.id}
                >
                    <span className="name">{topping.name}</span>
                    <span className="count">{topping.count}</span>
                </Link>
            ))}
        </ToppingsStyles>
    )
};