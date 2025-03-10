import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import profilePic from '../../pages/photo.jpg'

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        subtitles {
          en
          fr
        }
        url
        author {
          bluesky
        }
      }
    }
  }
`

function SEO({
  meta = [],
  title = '',
  slug = '',
  lang = 'en',
  image = profilePic,
  description,
}) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.subtitles[lang]
        const metaImage = `${siteMetadata.url}${image}`
        const url = `${siteMetadata.url}${slug}`
        return (
          <Helmet
            htmlAttributes={{ lang }}
            {...(title
              ? {
                  titleTemplate: `%s — ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: siteMetadata.title,
                })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: 'og:image',
                        content: metaImage,
                      },
                    ]
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO
