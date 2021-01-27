import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlicemastersGridStyles = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SingleSlicemasterStyles = styled.div`
    a {
        text-decoration: none;
    }
    .gatsby-image-wrapper {
        height: 400px;
    }
    h2 {
        transform: rotate(-8deg);
        text-align: center;
        font-size: 4rem;
        margin-bottom: -2rem;
        position: relative;
        z-index: 2;
    }
    .description {
        background: var(--yellow);
        padding: 1rem;
        margin: 1rem;
        margin-top: -6rem;
        z-index: 2;
        position: relative;
        transform: rotate(1deg);
        text-align: center;
    }
`;

export default function SliceMastersPage({ data }) {
    const slicemasters = data.people.nodes;
    console.log({slicemasters});
    
    return (
        <>
            {/* <p>{process.env.GATSBY_PAGE_SIZE}</p> */}
            {/* <p>Kia Ora, I'm the slicemasters page!</p> */}
            <SlicemastersGridStyles>
                {slicemasters.map( person => (
                    <SingleSlicemasterStyles>
                        <Link to={`/person/${person.slug.current}`}>
                            <h2>
                                <span className="mark">{person.name}</span>
                            </h2>
                            <Img fluid={person.image.asset.fluid} alt={person.name}></Img>

                        </Link>
                        <p className="description">{person.description}</p>
                    </SingleSlicemasterStyles>
                ))}
            </SlicemastersGridStyles>
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