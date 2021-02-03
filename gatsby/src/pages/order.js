import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import usePizza from '../utils/usePizza';

export default function OrderPage({ data }) {

    const pizzas = data.pizzas.nodes;

    const {values, updateValues} = useForm({
        name: '',
        email: ''
    });

    const {order, addToOrder, removeFromOrder} = usePizza({
        pizzas, 
        inputs: values
    });

    return (
        <>
            <SEO title="Order Page"/>
            <p>Kia Ora, I'm the order page!</p>
            <OrderStyles>
                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={values.name}
                            onChange={updateValues}
                        />
                    </label>
                    <label htmlFor="email">Email
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={values.email}
                            onChange={updateValues}
                        />
                    </label>
                </fieldset>
                <fieldset className="menu">
                    <legend>Menu</legend>
                    {pizzas.map(pizza => (
                        <MenuItemStyles key={pizza.id}>
                            <Img 
                                width="50"
                                height="50"
                                fluid={pizza.image.asset.fluid}
                                alt={pizza.name} 
                            />
                            <div>
                                <h2>{pizza.name}</h2>
                            </div>
                            <div>
                                {['S', 'M', 'L'].map(size => (
                                    <button type="button">
                                        {size}
                                        {` `}
                                        {formatMoney(calculatePizzaPrice(pizza.price, size))}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>
                <fieldset className="order">
                    <legend>Order</legend>
                </fieldset>
            </OrderStyles>
        </>
    );
};

export const query = graphql`
    query {
        pizzas: allSanityPizza{
            nodes {
                name
                id
                price
                slug {current}
                image {
                    asset {
                        fluid(maxWidth: 100) {
                            ... GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;