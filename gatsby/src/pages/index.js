import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
    console.log({slicemasters});
    
    return (
        <div>
            {!slicemasters && <LoadingGrid count={4} />}
            {slicemasters && !slicemasters?.length && 
                (<p>No one's working at the moment.</p>)
            }
            {slicemasters?.length && <ItemGrid items={slicemasters}/>}
        </div>
    );
};

function HotSlices({ hotSlices }) {
    return (
        <div>
            {!hotSlices && <LoadingGrid count={4} />}
            {hotSlices && !hotSlices?.length &&
                (<p>Nothing hot just yet.</p>)
            }
            {hotSlices?.length && <ItemGrid items={hotSlices} />}
        </div>
    );
};


export default function HomePage() {
    const {slicemasters, hotSlices} = useLatestData();
    return (
        <div className="center">
            <h1>The Best Damn Pizza Around</h1>
            <p>Open 11am to 11pm, always</p>
            <HomePageGrid>
                <CurrentlySlicing slicemasters={slicemasters}/>
                <HotSlices hotSlices={hotSlices}/>
            </HomePageGrid>

        </div>
    );
}

