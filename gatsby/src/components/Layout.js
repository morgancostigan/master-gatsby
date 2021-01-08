import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css'; //brings all browsers to same baseline css, before styling
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    margin-top: clamp(2rem, 10vw, 12rem);
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout(props) {
    return (
        <>
            <GlobalStyles/>
            <Typography/>
            <SiteBorderStyles>
                <ContentStyles>
                    <Nav />
                    {props.children}
                    <Footer />
                </ContentStyles>
            </SiteBorderStyles>
        </>
    );    
}