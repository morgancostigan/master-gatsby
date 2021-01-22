import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

export default function SliceMastersPage({ data }) {
    const slicemasters = data.people.nodes;
    console.log({slicemasters});
    
    return (
        <>
            <p>Kia Ora, I'm the slicemasters page!</p>
            <div>
                {slicemasters.map( person => (
                    <div>
                        <Link to={`/slicemaster/${person.slug.current}`}>
                            <h2>
                                <span className="mark">{person.name}</span>
                            </h2>
                        </Link>
                        <Img fluid={person.image.asset.fluid} alt={person.name}></Img>
                        <p className="description">{person.description}</p>
                    </div>
                ))}
            </div>
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