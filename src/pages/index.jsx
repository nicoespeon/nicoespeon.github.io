import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const { i18n } = this.props
    const { title, subtitles } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    const items = posts
      .filter(post => post.node.fields.slug.startsWith('/en/'))
      .map(post => <Post data={post} key={post.node.fields.slug} i18n={i18n} />)

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitles[i18n.lang]} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withI18n(IndexRoute)

export const pageQuery = graphql`
  query IndexQuery {
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
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
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
