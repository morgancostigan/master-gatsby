import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


//using module.exports (common js), because export default (ES6 module) breaks the start command even with r-esm in the build scripts
module.exports = {
    siteMetadata: {
        title: `Slick's Slices`,
        siteUrl: `https://gatsby.pizza`,
        description: `Simply the best, better than all the others.`,
        twitter: `@SlicksSlices`
    },
    plugins: [
        // vvvv to use default plugin settings import like this vvvv
        'gatsby-plugin-styled-components',  
        // vvvv to ensure Helmets work server side
        'gatsby-plugin-react-helmet',     
        // vvvv to use settings other than the default, import like this vvvv
        {
            //plugin name
            resolve: 'gatsby-source-sanity',            
            options: {                
                projectId: 'tpgjmlq2',
                dataset: 'production',
                    //watchMode automtically updates gatsby when it sees changes to Sanity data
                watchMode: true,
                token: process.env.SANITY_AUTH_TOKEN,
            },
        },
    ],
};