import { graphql } from 'gatsby';
import React from 'react';

export default function PizzasPage() {
    return (
        <>
            <p>Kia Ora, I'm the pizza page!</p>
        </>
    );
}

export const query = graphql`
    # you don't NEED to name the query
    query PizzaQuery {
        allSanityPizza {
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
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    } 
`;