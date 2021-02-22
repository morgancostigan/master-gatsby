

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/404.js"))),
  "component---src-pages-beers-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/beers.js"))),
  "component---src-pages-index-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/index.js"))),
  "component---src-pages-order-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/order.js"))),
  "component---src-pages-pizzas-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/pages/slicemasters.js"))),
  "component---src-templates-pizza-template-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/templates/PizzaTemplate.js"))),
  "component---src-templates-slicemaster-template-js": (preferDefault(require("/Users/macbookpro/Documents/Tier-4/master-gatsby-master/starter-files/gatsby/src/templates/SlicemasterTemplate.js")))
}

