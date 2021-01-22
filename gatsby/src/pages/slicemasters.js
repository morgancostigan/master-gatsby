import { graphql } from 'gatsby';
import React from 'react';

export default function SliceMastersPage({ data }) {
    const slicemasters = data.people.nodes;
    console.log({slicemasters});
    
    return (
        <>
            <p>Kia Ora, I'm the slicemasters page!</p>
        </ >
    );
}

export const query = graphql`
    query{
        people: allSanityPerson {
            totalCount
            nodes {
                name
                id
                description
                slug {
                    current
                }
                image {
                    asset {
                        fluid(maxWidth: 300) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;