//this file Gatsby loads into the server for faster browsing
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>
        {element}
    </Layout>
}