import React from 'react';
import { ItemsGrid } from "../styles/Grids";

export default function LoadingGrid({count}) {
    return (
        <ItemsGrid>
            {Array.from({ length: count }, (_, i) => (
                <div>
                    <p className="mark">Loading...</p>
                    <img 
                        className="loading" 
                        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII=" 
                        alt="Loading"
                        width="500"
                        height="400" 
                    />
                </div>
            ))}
        </ItemsGrid>
    );
}
