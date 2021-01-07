import React from 'react';
import { Link } from 'gatsby';
//in Gatsby Link to is faster than href


export default function Nav() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pizzas">Pizza Menu</Link>
            </li>
            <li>
                <Link to="/">LOGO</Link>
            </li>
            <li>
                <Link to="/slicemasters">Slice Masters</Link>
            </li>
            <li>
                <Link to="/order">Order Ahead!</Link>
            </li>
        </ul>
    </nav>
}