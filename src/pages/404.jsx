import React from 'react'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

class NotFoundRoute extends React.Component {
  render() {
    const { i18n: { lang } } = this.props
    const title = {
      en: "Hmmm, there's nothing there…",
      fr: 'Hum, il n’y a rien ici…',
    }[lang]
    const content = {
      en: "You just hit a page that doesn't exist.",
      fr: 'Vous venez d’arriver sur une page qui n’existe pas.',
    }[lang]

    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{title}</h1>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CDa-0adnlmk?controls=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="page__body">
                  <p>{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withI18n(NotFoundRoute)

export const pageQuery = graphql`
  query NotFoundQuery {
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
  }
`
