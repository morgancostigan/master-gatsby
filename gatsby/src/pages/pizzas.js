import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({data}) {
    const pizzas = data.pizzas.nodes;
    
    return (
        <>
            <p>Kia Ora, I'm the pizza page! There are {pizzas.length} pizzas.</p>
            <PizzaList pizzas={pizzas}/>
        </>
    );
}

export const query = graphql`
    # you don't NEED to name the query
    query PizzaQuery {
        # this renames the query
        pizzas: allSanityPizza {
            nodes {
                id
                name
                price
                slug {
                    current
                }
                toppings {
                    id
                    name
                    vegetarian
                }
                # images work a little differently in gatsby
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            # this fragment is how our plugin asks for all associated data
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    } 
`;