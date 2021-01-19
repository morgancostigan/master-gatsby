import path from 'path';

async function turnPizzasIntoPages({graphql, actions}) {
    //1. get a page template
    const pizzaTemplate = path.resolve('./src/templates/PizzaTemplate.js');
    //2. query all pizzas
    const {data} = await graphql(`
        query {
            pizzas: allSanityPizza {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    console.log({data});
    //3. loop over pizzas and create a page for each
    data.pizzas.nodes.forEach(pizza => {
        console.log('creating', pizza.name);
        actions.createPage({
            //what's the URL for this new page
            path: `pizza/${pizza.slug.current}`,
            component: pizzaTemplate, 
            //use context to pass data TO template
            context: {
                slug: pizza.slug.current,
            }
        })
        
    });
}

export async function createPages(params) {
    //create pages dynamically
    //1. PIZZAS
    await turnPizzasIntoPages(params);
    //2. TOPPINGS
    //3. SLICEMASTERS
}