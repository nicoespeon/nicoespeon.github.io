import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'
import TagTemplateDetails from '../components/TagTemplateDetails'

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { tag } = this.props.pageContext

    const {
      i18n: { lang },
    } = this.props
    const pageTitle = `Tag "${tag}" - ${title}`
    const description = {
      en: `All my posts tagged as "${tag}".`,
      fr: `Tous mes articles avec l’étiquette "${tag}".`,
    }[lang]

    return (
      <Layout>
        <div>
          <Helmet title={pageTitle} />
          <SEO
            title={pageTitle}
            description={description}
            slug={this.props.location.pathname}
            lang={lang}
          />
          <Sidebar {...this.props} />
          <TagTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default withI18n(TagTemplate)

export const pageQuery = graphql`
  query TagPage($tag: String) {
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
          bluesky
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
          tags: { in: [$tag] }
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
