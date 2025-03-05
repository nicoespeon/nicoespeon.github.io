import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import withI18n from '../../hocs/withI18n'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

class CategoriesRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const categories = this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <div>
          <Helmet title={`Catégories - ${title}`} />
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Catégories</h1>
                <div className="page__body">
                  <div className="categories">
                    <ul className="categories__list">
                      {categories.map(category => (
                        <li
                          key={category.fieldValue}
                          className="categories__list-item"
                        >
                          <Link
                            to={`/fr/categories/${kebabCase(
                              category.fieldValue
                            )}/`}
                            className="categories__list-item-link"
                          >
                            {category.fieldValue} ({category.totalCount})
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

export default withI18n(CategoriesRoute)

export const pageQuery = graphql`
  query CategoryesQueryFr {
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
      limit: 2000
      filter: {
        frontmatter: {
          layout: { eq: "post" }
          draft: { ne: true }
          lang: { eq: "fr" }
        }
      }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
