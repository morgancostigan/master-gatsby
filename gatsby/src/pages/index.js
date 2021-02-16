import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
    return (
        <div>
            <p>Currently Slicing</p>
        </div>
    );
};

function HotSlices() {
    return (
        <div>
            <p>Hot Slices</p>
        </div>
    );
};


export default function HomePage() {
    const result = useLatestData();
    console.log({result});
    
    return (
        <div className="center">
            <h1>The Best Damn Pizza Around</h1>
            <p>Open 11am to 11pm, always</p>
            <div>
                <CurrentlySlicing></CurrentlySlicing>
                <HotSlices></HotSlices>
            </div>

        </div>
    );
}

