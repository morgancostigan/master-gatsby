import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm'; 
import usePizza from '../utils/usePizza';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import calculateOrderTotal from '../utils/calculateOrderTotal';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import PizzaOrder from '../components/PizzaOrder';

export default function OrderPage({ data }) {
  const pizzas = data.pizzas.nodes;

  const { values, updateValues } = useForm({
    name: '',
    email: '',
    dreadPirateJimmy: '',
  });

  const { 
    order, 
    addToOrder, 
    removeFromOrder, 
    error, 
    loading, 
    message,
    submitOrder 
  } = usePizza({
    pizzas,
    values: values,
  });

  //message only exists after successful submit 
  if(message) {
    return<p>{message}</p>
  };

  return (
    <>
      <SEO title="Order Page" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValues}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValues}
            />
            <input
              type="dreadPirateJimmy"
              name="dreadPirateJimmy"
              id="dreadPirateJimmy"
              value={values.dreadPirateJimmy}
              onChange={updateValues}
              className="dreadPirateJimmy"
            />
          </label>
        </fieldset>
        <fieldset disabled={loading} className="menu">
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
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
                {['S', 'M', 'L'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: pizza.id,
                        size,
                      })
                    }
                  >
                    {size}
                    {` `}
                    {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset disabled={loading} className="order">
          <legend>Order</legend>
          <PizzaOrder order={order} pizzas={pizzas} removeFromOrder={removeFromOrder}/>
        </fieldset>
        <fieldset disabled={loading}>
            <h3>Your Total Is {calculateOrderTotal(order, pizzas)}</h3>
            <div> 
              {error ? <p>Error: {error}</p> : ''}
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
