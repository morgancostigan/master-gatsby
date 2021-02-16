import React from 'react';

export default function HomePage() {
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

