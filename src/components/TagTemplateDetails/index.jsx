import React from 'react'
import Post from '../Post'

class TagTemplateDetails extends React.Component {
  render() {
    const { i18n } = this.props

    const posts = this.props.data.allMarkdownRemark.edges
    const items = posts
      .filter(post => {
        const postLang = post.node.fields.slug.startsWith('/fr/') ? 'fr' : 'en'
        return postLang === i18n.lang
      })
      .map(post => <Post data={post} key={post.node.fields.slug} i18n={i18n} />)

    const tagTitle = this.props.pageContext.tag
    const title = {
      en: `All Posts tagged as "${tagTitle}" `,
      fr: `Tous les articles portant le tag "${tagTitle}"`,
    }[i18n.lang]

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{title}</h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TagTemplateDetails
