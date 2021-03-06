import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SlicemastersGridStyles = styled.div`
    /* align-content: center;
    align-items: center;
    justify-items: center; */
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

export default function SliceMastersPage({ data, pageContext }) {
    const slicemasters = data.people.nodes;
    
    return (
        <>
            <SEO title={`Slicemasters - Page ${pageContext.currentPage || 1}`}/>
            <Pagination 
                pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
                totalCount={data.people.totalCount}
                currentPage={pageContext.currentPage || 1}
                skip={pageContext.skip}
                base="/slicemasters"
            />
            <SlicemastersGridStyles>
                {slicemasters.map( person => (
                    <SingleSlicemasterStyles key={person.id}>
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
    query($skip: Int = 0, $pageSize: Int = 3){
        people: allSanityPerson(limit: $pageSize, skip: $skip) {
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