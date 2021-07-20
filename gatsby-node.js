/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)


exports.createPages = ({ graphql, actions: { createPage } }) => {
    return graphql(`
        query {
            allDatoCmsProject {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then( (result) => {
        result.data.allDatoCmsProject.edges.forEach(({ node }) => {
            createPage({
                component: path.resolve(`./src/components/Projects/Template.js`),
                path: `/projects/${node.slug}`,
                context: {
                    slug: node.slug,
                }
            })
        })
    }).catch( (error) => {
        console.log(error.message)
    })
}