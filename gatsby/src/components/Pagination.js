import { Link } from 'gatsby';
import React from 'react';

export default function Pagination({
    pageSize, totalCount, currentPage, skip, base
}) {
    //make some vars
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNext = nextPage <= totalPages;
    const hasPrev = prevPage >= 1;
    return <div>
        <Link disabled={!hasPrev} to={`${base}/${prevPage}`}>◀️ Previous</Link>
        {Array.from({length: totalPages}).map((_, i) => 
            <Link>{i + 1}</Link>)}
        <Link disabled={!hasNext} to={`${base}/${nextPage}`}>Next ▶️</Link>
    </div>
}