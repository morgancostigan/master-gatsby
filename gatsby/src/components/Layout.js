import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css'; //brings all browsers to same baseline css, before styling

export default function Layout(props) {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer />
        </div>
    );    
}