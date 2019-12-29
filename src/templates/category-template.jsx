import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'
import CategoryTemplateDetails from '../components/CategoryTemplateDetails'

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { category } = this.props.pageContext

    return (
      <Layout>
        <div>
          <Helmet title={`${category} - ${title}`} />
          <SEO
            title={`${category} - ${title}`}
            slug={this.props.location.pathname}
            lang={this.props.i18n.lang}
          />
          <Sidebar {...this.props} />
          <CategoryTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default withI18n(CategoryTemplate)

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
        subtitles {
          en
          fr
        }
        greetings {
          en
          fr
        }
        menus {
          en {
            label
            path
          }
          fr {
            label
            path
          }
        }
        author {
          name
          email
          twitter
          github
          linkedin
          rss
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          category: { eq: $category }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          timeToRead
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
