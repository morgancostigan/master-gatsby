import React, { useEffect, useState } from "react";

export default function useLatestData() {
    //hot slices
    const [hotSlices, setHotSlices] = useState();
    //slicemasters currently slicing
    const [slicemasters, setSlicemasters] = useState();
    //use a side effect to fetch data from graphql endpoint
    useEffect(function() {
        //when component loads, fetch the data
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query {
  StoreSettings(id: "downtown"){
		name
    slicemaster {
      name
    }
    hotSlices {
      name
    }
  }
}
                `,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            // TODO check for errors
            // set state
            setHotSlices(res.data.StoreSettings.hotSlices);
            setSlicemasters(res.data.StoreSettings.slicemaster);
        })
        .catch((err) => {
            console.log('Oh Zang!');
            console.log(err);
            
            
        });
    }, []);
    return {
        hotSlices,
        slicemasters
    };
};