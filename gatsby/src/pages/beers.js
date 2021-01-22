import { graphql } from 'gatsby';
import React from 'react';

export default function BeersPage({ data }) {
    console.log({data});
    
    return (
        <>
            <p>Kia Ora, I'm the beer page!</p>
        </>
    );
}

export const query = graphql`
    query {
        beers: allBeer{
            nodes{
                id
                name
                price
                image 
                rating{
                    reviews
                    average
                }
            }
        }
    }
`;
