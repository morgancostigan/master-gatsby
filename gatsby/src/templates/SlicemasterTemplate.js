import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SlicemasterGrid = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePersonPage({ data: { person } }) {
    return (
        <>
            <SEO title={`Slicemaster ${person.name}!`}/>
            <SlicemasterGrid>
                <Img fluid={person.image.asset.fluid} />
                <div >
                    <h2 className="mark">{person.name}</h2>
                    <p>{person.description}</p>
                </div>
            </SlicemasterGrid>
        </>
    )
}

//this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        person: sanityPerson( slug: { current: { eq: $slug } } ) {
                name
                id
                description
                image {
                    asset {
                        fluid(maxWidth: 300){
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                slug {
                    current
                }
        }
    }
`;

 