import { graphql } from 'gatsby';
import React from 'react';

export default function SliceMastersPage() {
    return (
        <>
            <p>Kia Ora, I'm the slicemasters page!</p>
        </ >
    );
}

export const query = graphql`
    query{
        people: allSanityPerson {
            nodes {
                name
                id
                description
                slug {
                    current
                }
            }
        }
    }
`;