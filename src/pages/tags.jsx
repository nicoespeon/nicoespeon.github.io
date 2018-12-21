import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
import withI18n from '../hocs/withI18n'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

class TagsRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const tags = this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <div>
          <Helmet title={`All Tags - ${title}`} />
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Tags</h1>
                <div className="page__body">
                  <div className="tags">
                    <ul className="tags__list">
                      {tags.map(tag => (
                        <li key={tag.fieldValue} className="tags__list-item">
                          <Link
                            to={`/tags/${kebabCase(tag.fieldValue)}/`}
                            className="tags__list-item-link"
                          >
                            {tag.fieldValue} ({tag.totalCount})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withI18n(TagsRoute)

export const pageQuery = graphql`
  query TagsQuery {
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
      limit: 2000
      filter: {
        frontmatter: {
          layout: { eq: "post" }
          draft: { ne: true }
          lang: { eq: "en" }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
