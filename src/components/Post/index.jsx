import React from 'react'
import { Link } from 'gatsby'
import { formatTimeToRead } from '../../helpers'
import withLocalMoment from '../../hocs/withLocalMoment'
import './style.scss'

class Post extends React.Component {
  render() {
    const { i18n, localMoment } = this.props
    const { timeToRead } = this.props.data.node
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    const read = {
      en: 'Read',
      fr: 'Lire',
    }[i18n.lang]

    return (
      <div className="post">
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={localMoment(date).format('MMMM D, YYYY')}
          >
            {localMoment(date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <small className="post__meta-readtime">
            {formatTimeToRead(timeToRead, i18n.lang)}
          </small>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              #{category}
            </Link>
          </span>
        </div>
        <p className="post__description">{description}</p>
        <Link className="post__readmore link-underlined" to={slug}>
          {read}
        </Link>
      </div>
    )
  }
}

export default withLocalMoment(Post)
