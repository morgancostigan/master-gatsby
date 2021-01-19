import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default function SinglePizzaPage({data: {pizza}}) {
    // console.log({pizza});
    return <div>
        <Img fluid={pizza.image.asset.fluid}/>
        <div>
            <h2 className="mark">{pizza.name}</h2>
            <ul>
                {pizza.toppings.map(topping => <li key={topping.id}>
                    {topping.name}
                </li>)}
            </ul>
        </div>
    </div>
}

//this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza( slug: { current: { eq: $slug } } ) 
            {
                name
                id
                image {
                    asset {
                        fluid(maxWidth: 800) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                toppings {
                    name
                    id
                    vegetarian
                }
            }
    }
`; 

