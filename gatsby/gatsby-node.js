import path from 'path';
// fetch allows you to fetch within node
import fetch from 'isomorphic-fetch';

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
    //3. loop over pizzas and create a page for each
    data.pizzas.nodes.forEach(pizza => {
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

async function turnPeopleIntoPages({ graphql, actions }) {
    //1. get template
    const personTemplate = path.resolve('./src/templates/SlicemasterTemplate.js');
    //2. query slicemasters
    const { data } = await graphql(`
        query {
            people: allSanityPerson {
                totalCount
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    //2.5 figure out how many slicemasters there are and how many we want per page to determine the number of pages
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.people.totalCount / pageSize);
    //3. create page for each slicemaster
    data.people.nodes.forEach(person => {
        actions.createPage({
            //what's the URL for this new page
            path: `person/${person.slug.current}`,
            component: personTemplate,
            //use context to pass data TO template
            context: {
                slug: person.slug.current,
            }
        })
    });
    //4. loop through people to make pages 1 thru n and make pages
    Array.from({ length: pageCount}).forEach((_, i) => {
        actions.createPage({
            path: `/slicemasters/${i+1}`,
            component: path.resolve('./src/pages/slicemasters.js'),
            context: {
                 skip: i * pageSize,
                 currentPage: i + 1,
                 pageSize,
            }
        })
    })
}//end turnSlicemastersIntoPages

async function fetchBeersAndTurnIntoNodes({ 
    actions, createNodeId, createContentDigest}) {
        //1. fetch list of beers  
    const res = await fetch('https://api.sampleapis.com/beers/ale');
    const beers = await res.json();
        //2. loop over them
        //could use a forEach, like in the pizzas and toppings
        // using for of instead, just to illustrate both
    for (const beer of beers){
        //create a node for each beer
        const nodeMeta = {
            id: createNodeId(`beer-${beer.name}`), //this is a gatsby function
            parent: null,
            children: [],
            internal: {
                type: 'Beer', 
                mediaType: 'application/json', //allows other plugins to find this data
                contentDigest: createContentDigest(beer), //lets gatsby know if data has changed
            },
        };
                //3. create a node for each      
        actions.createNode({
            ...beer, 
            ...nodeMeta,
        });
    };//end FOR    
};//end fetchBeersAndTurnIntoNodes

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
        turnPeopleIntoPages(params)
    ]);
    //1. PIZZAS
    //2. TOPPINGS
    //3. SLICEMASTERS
}//end createPages
