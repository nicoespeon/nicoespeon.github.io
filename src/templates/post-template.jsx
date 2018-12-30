import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'

class PostTemplate extends React.Component {
  componentDidMount() {
    // See https://www.stevenmercatante.com/how-to-add-twitter-buttons-to-a-gatsby-site/
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }

  render() {
    const { i18n } = this.props
    const { subtitles } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description =
      postDescription !== null ? postDescription : subtitles[i18n.lang]

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{postTitle}</title>
            <meta name="description" content={description} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default withI18n(PostTemplate)

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitles {
          en
          fr
        }
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      timeToRead
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`
