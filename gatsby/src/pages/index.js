import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
    return (
        <div>
            <LoadingGrid count={4}/>
        </div>
    );
};

function HotSlices() {
    return (
        <div>
            <LoadingGrid count={4}/>
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

