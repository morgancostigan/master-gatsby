import React from 'react';
import { Link } from 'gatsby';
//in Gatsby Link to is faster than href
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
    /* margin-bottom: 3rem; */
    .logo {
        transform: translateY(- 25%);
    }
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center; 
        text-align: center;
        list-style: none;
        margin-top: -6rem;
    }
    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        order: 1;
        &:nth-child(1) {
            --rotate: 1deg;
        }
        &:nth-child(2) {
            --rotate: -2.5deg;
        }
        &:nth-child(4) {
            --rotate: 2.5deg;
        }
        &:nth-child(1) {
            --rotate: -1deg;
        }
        &:hover {
            --rotate: 5deg;
        }
    }
    a {
        font-size: 3rem;
        text-decoration: none;
        display: block;
        &:hover {
            color: var(--red);
        }
        @media (max-width:800px) {
            font-size: 2rem;
        }
    }
`;


export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizza Menu</Link>
                </li>
                <li>
                    <Link to="/"><Logo/></Link>
                </li>
                <li>
                    <Link to="/slicemasters">Slice Masters</Link>
                </li>
                <li>
                    <Link to="/order">Order Ahead!</Link>
                </li>
            </ul>
        </NavStyles>
    )
}  