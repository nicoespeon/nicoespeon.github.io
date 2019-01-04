const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

// Not sure if this is the most appropriate hook to create redirections
// but, so far, it works.
exports.onPostBootstrap = ({ actions }) => {
  const { createRedirect } = actions

  // Redirect pages from old blog that get referenced in Google.
  // They contained `.html` suffix, which doesn't exist today.
  const oldHtmlPages = ['/about', '/projects', '/worth-reading']
  oldHtmlPages.forEach(page => {
    createRedirect({
      fromPath: `${page}.html`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: page,
    })
    createRedirect({
      fromPath: `/fr${page}.html`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: `/fr${page}`,
    })
  })

  // There is no archive page anymore. It used to contain all articles.
  createRedirect({
    fromPath: '/archive/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/',
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.jsx')
    const pageTemplate = path.resolve('./src/templates/page-template.jsx')
    const tagTemplate = path.resolve('./src/templates/tag-template.jsx')
    const categoryTemplate = path.resolve(
      './src/templates/category-template.jsx'
    )

    graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                layout
                category
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      _.each(result.data.allMarkdownRemark.edges, edge => {
        const slug = edge.node.fields.slug
        if (_.get(edge, 'node.frontmatter.layout') === 'page') {
          createPage({
            path: slug,
            component: slash(pageTemplate),
            context: { slug },
          })
        } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
          createPage({
            path: slug,
            component: slash(postTemplate),
            context: { slug },
          })

          const langPrefix = slug.startsWith('/fr/') ? '/fr' : ''

          let tags = []
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }

          tags = _.uniq(tags)
          _.each(tags, tag => {
            const tagPath = `${langPrefix}/tags/${_.kebabCase(tag)}/`
            createPage({
              path: tagPath,
              component: tagTemplate,
              context: { tag },
            })
          })

          let categories = []
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category)
          }

          categories = _.uniq(categories)
          _.each(categories, category => {
            const categoryPath = `${langPrefix}/categories/${_.kebabCase(
              category
            )}/`
            createPage({
              path: categoryPath,
              component: categoryTemplate,
              context: { category },
            })
          })
        }
      })

      resolve()
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`
    createNodeField({ node, name: 'slug', value: slug })
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    let slug = fileNode.fields.slug
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    const lang = slug.startsWith('/fr/') ? 'fr' : 'en'
    const langPrefix = lang === 'fr' ? '/fr' : ''
    const nodeWithLang = { ...node, frontmatter: { ...node.frontmatter, lang } }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `${langPrefix}/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node: nodeWithLang, name: 'tagSlugs', value: tagSlugs })
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `${langPrefix}/categories/${_.kebabCase(
        node.frontmatter.category
      )}/`
      createNodeField({
        node: nodeWithLang,
        name: 'categorySlug',
        value: categorySlug,
      })
    }
  }
}
