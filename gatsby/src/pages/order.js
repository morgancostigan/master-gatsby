import React from 'react';
import SEO from '../components/SEO';

export default function OrderPage() {
    return (
        <>
            <SEO title="Order Page"/>
            <p>Kia Ora, I'm the order page!</p>
            <form>
                <fieldset>
                    <legend>Your Info</legend>
                </fieldset>
                <fieldset>
                    <legend>Menu</legend>
                </fieldset>
                <fieldset>
                    <legend>Order</legend>
                </fieldset>
            </form>
        </>
    );
}