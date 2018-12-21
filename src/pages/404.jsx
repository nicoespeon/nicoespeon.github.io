import React from 'react'
import { graphql } from 'gatsby'
import withI18n from '../hocs/withI18n'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

class NotFoundRoute extends React.Component {
  render() {
    const { i18n: { lang } } = this.props
    const title = {
      en: "Uh oh, there's nothing there!",
      fr: 'Oh oh, il n’y a rien ici !',
    }[lang]
    const content = {
      en: "You just hit a page that doesn't exist... the sadness.",
      fr:
        'Vous venez d’arriver sur une page qui n’existe pas… quelle tristesse.',
    }[lang]

    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{title}</h1>
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
