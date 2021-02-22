import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {    
    return (
        <section id="homies" key="slicemasters">
            <h3 className="center">
                <span className="mark tilt">
                    Slicemasters at the helm
                </span>
            </h3>
            <p>We'll get you the slice you need!</p>
            {!slicemasters && <LoadingGrid count={4} />}
            {slicemasters && !slicemasters?.length && 
                (<p>No one's working at the moment.</p>)
            }
            {slicemasters?.length && <ItemGrid items={slicemasters}/>}
        </section>
    );
};

function HotSlices({ hotSlices }) {
    return (
        <section id="homeSlice" key={hotSlices}>
            <h3 className="center">
                <span className="mark tilt">
                    Current Mouth Burners
                </span>
            </h3>
            <p>All hot, all available now!</p>

            {!hotSlices && <LoadingGrid count={4} />}
            {hotSlices && !hotSlices?.length &&
                (<p>Nothing hot just yet.</p>)
            }
            {hotSlices?.length && <ItemGrid items={hotSlices} />}
        </section>
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

