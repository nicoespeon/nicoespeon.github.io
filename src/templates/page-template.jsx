import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'

class PageTemplate extends React.Component {
  render() {
    const { i18n } = this.props
    const { title, subtitles } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description =
      pageDescription !== null ? pageDescription : subtitles[i18n.lang]

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default withI18n(PageTemplate)

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
