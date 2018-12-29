import React from 'react'
import { Link } from 'gatsby'
import startCase from 'lodash/startCase'
import { formatTimeToRead } from '../../helpers'
import withLocalMoment from '../../hocs/withLocalMoment'
import Disqus from '../Disqus/Disqus'
import Twitter from '../Twitter'
import Theme from '../Theme'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { i18n, localMoment } = this.props
    const { subtitles, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs

    const homeBlock = {
      en: (
        <div className="post-single__button-container">
          <Link
            className="post-single__button post-single__button--home"
            to="/"
          >
            &larr; Articles
          </Link>
          <Theme lang={i18n.lang}>
            {(nextTheme, toggleTheme) => {
              return (
                <div
                  className="post-single__button post-single__button--theme"
                  onClick={toggleTheme}
                >
                  {startCase(nextTheme)} theme
                </div>
              )
            }}
          </Theme>
        </div>
      ),
      fr: (
        <div className="post-single__button-container">
          <Link
            className="post-single__button post-single__button--home"
            to="/fr/"
          >
            &larr; Articles
          </Link>
          <Theme lang={i18n.lang}>
            {(nextTheme, toggleTheme) => {
              return (
                <div
                  className="post-single__button post-single__button--theme"
                  onClick={toggleTheme}
                >
                  Thème {nextTheme}
                </div>
              )
            }}
          </Theme>
        </div>
      ),
    }[i18n.lang]

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    const date = localMoment(post.frontmatter.date)
    const publishedText = {
      en: `Published ${date.format('D MMM YYYY')}`,
      fr: `Publié le ${date.format('D MMM YYYY')}`,
    }[i18n.lang]

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <p className="post-single__subtitle">
              {formatTimeToRead(post.timeToRead, i18n.lang)}
            </p>
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="post-single__date">
              <em>{publishedText}</em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              {subtitles[i18n.lang]}
              <Twitter lang={i18n.lang} author={author.twitter} />
            </p>
            {commentsBlock}
          </div>
        </div>
      </div>
    )
  }
}

export default withLocalMoment(PostTemplateDetails)
