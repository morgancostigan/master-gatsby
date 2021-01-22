import { graphql } from 'gatsby';
import React from 'react';

export default function BeersPage({ data }) {
    console.log({data});
    
    return (
        <>
            <h2 className="center">We have {data.beers.nodes.length} beers available!</h2>
            <h3 className="center">Dine in only.</h3>
            <div>
                {data.beers.nodes.map(beer => {
                    const rating = Math.round(beer.rating.average);
                    return (
                        <div key={beer.id}>
                            <img src={beer.image} alt={beer.name}></img>
                            <h3>{beer.name}</h3>
                            {beer.price}
                            <p title={`${rating} out of 5 stars, with ${beer.rating.reviews} reviews.`}>
                                {`⭐`.repeat(rating)}
                                <span style={{ filter: `grayscale(90%)`}}>
                                    {`⭐`.repeat(5 - rating)}
                                </span>
                                <span>({beer.rating.reviews} reviews.)</span>
                            </p>

                        </div>
                    )
                })}
            </div>
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
