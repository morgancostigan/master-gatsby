import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({data, pageContext}) {
    const pizzas = data.pizzas.nodes;
    
    return (
        <>
            <SEO title={pageContext.topping ? `Pizzas with ${pageContext.topping}` : `All Pizzas`}/>
            <ToppingsFilter activeTopping={pageContext.topping}/>
            {/* <p>Kia Ora, I'm the pizza page! There are {pizzas.length} pizzas.</p> */}
            <PizzaList pizzas={pizzas}/>
        </>
    );
}

export const query = graphql`
    # you don't NEED to name the query
    query PizzaQuery($toppingRegex: String) {
        # this renames the query
        pizzas: allSanityPizza (
            filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
            )
            {
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
                        fixed(width: 200, height: 200) {
                            ...GatsbySanityImageFixed
                        }
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