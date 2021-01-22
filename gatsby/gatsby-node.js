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
    // console.log({data});
    //3. loop over pizzas and create a page for each
    data.pizzas.nodes.forEach(pizza => {
        // console.log('creating', pizza.name);
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
}//end turnPizzasIntoPages

async function turnToppingsIntoPages({ graphql, actions }) {
    // console.log('makin toppins');
    //1. get template
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    //2. query toppings
    const { data } = await graphql(`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                }
            }
        }
    `);
    //3. create page for each topping
    data.toppings.nodes.forEach(topping => {
        console.log('creatin page for', topping.name);
        actions.createPage({
            //what's the URL for this new page
            path: `topping/${topping.name}`,
            component: toppingTemplate,
            //use context to pass data TO template
            context: {
                topping: topping.name,
                //TODO regex for topping
                toppingRegex: `/${topping.name}/i`,
            }
        })
    });
    //4. pass topping data to pizza.js

}// turnToppingsIntoPages

async function turnSlicemastersIntoPages({ graphql, actions }) {
    //1. get template
    //2. query slicemasters
    //3. create page for each slicemaster
}//end turnSlicemastersIntoPages

async function fetchBeersAndTurnIntoNodes({ 
    actions, createNodeId, createContentDigest}) {
        console.log('turn beers into nodes');
        
    
}//end fetchBeersAndTurnIntoNodes

export async function sourceNodes(params) {
    //fetch list of beers and source into gatsby API
    await Promise.all([
        fetchBeersAndTurnIntoNodes(params), 
    ]);


}//end sourceNodes

export async function createPages(params) {
    //create pages dynamically
    //wait for all promises to be resolved
    await Promise.all([
        turnPizzasIntoPages(params),
        turnToppingsIntoPages(params),
        turnSlicemastersIntoPages(params)
    ]);
    //1. PIZZAS
    //2. TOPPINGS
    //3. SLICEMASTERS
}//end createPages
