import React from 'react'
import { Link } from 'gatsby'
import startCase from 'lodash/startCase'
import { formatTimeToRead } from '../../helpers'
import withLocalMoment from '../../hocs/withLocalMoment'
import Twitter from '../Twitter'
import Theme from '../Theme'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { i18n, localMoment, location } = this.props
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
            {(nextTheme, toggleTheme) => (
              <div
                className="post-single__button post-single__button--theme"
                role="button"
                tabIndex={0}
                onClick={toggleTheme}
                onKeyPress={toggleTheme}
              >
                {startCase(nextTheme)} theme
              </div>
            )}
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
            {(nextTheme, toggleTheme) => (
              <div
                className="post-single__button post-single__button--theme"
                role="button"
                tabIndex={0}
                onClick={toggleTheme}
                onKeyPress={toggleTheme}
              >
                Thème {nextTheme}
              </div>
            )}
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
      <React.Fragment>
        <i className="icon-twitter" />
        <a
          href={`https://mobile.twitter.com/search?q=${location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss this article on Twitter
        </a>
      </React.Fragment>
    )

    const date = localMoment(post.frontmatter.date)
    const publishedText = {
      en: `Published ${date.format('D MMM YYYY')}`,
      fr: `Publié le ${date.format('D MMM YYYY')}`,
    }[i18n.lang]

    const understandLegacyCode =
      i18n.lang === 'fr' ? (
        <React.Fragment>
          <h2>
            <span role="img" aria-label="Lève le doigt">
              ☝
            </span>
            Le saviez-vous?
          </h2>
          <p>
            Je suis l’auteur de{' '}
            <a href="https://understandlegacycode.com">
              <strong>understand</strong>legacycode.com
            </a>{' '}
            et je développe un cours intéractif pour apprendre à refactor
            n’importe quelle application JavaScript:{' '}
            <a href="https://refactoringjavascript.dev">
              <strong>refactoring</strong>javascript.dev
            </a>
            .
          </p>
          <p>
            Chaque semaine, je partage <strong>des astuces pratiques</strong> to
            pour aider les gens à travailler avec du Code Legacy.
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>
            <span role="img" aria-label="Raising finger">
              ☝
            </span>
            Did you know?
          </h2>
          <p>
            I’m the author of{' '}
            <a href="https://understandlegacycode.com">
              <strong>understand</strong>legacycode.com
            </a>{' '}
            and I’m building an interactive course to teach you to refactor any
            JavaScript application:{' '}
            <a href="https://refactoringjavascript.dev">
              <strong>refactoring</strong>javascript.dev
            </a>
            .
          </p>
          <p>
            Every week, I share <strong>practical tips</strong> to help people
            work with Legacy Code.
          </p>
        </React.Fragment>
      )

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <p className="post-single__subtitle">
              <span className="post-single__line-through">
                {formatTimeToRead(post.timeToRead, i18n.lang)}
              </span>
            </p>
            <div
              className="post-single__body"
              /* eslint-disable react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
              /* eslint-enable react/no-danger */
            />
            <div className="post-single__meta">
              <span className="post-single__date">{publishedText}</span>
              <span className="post-single__comments">{commentsBlock}</span>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            {understandLegacyCode}
            <hr />
            <div className="post-single__footer-text">
              {subtitles[i18n.lang]}
              <Twitter lang={i18n.lang} author={author.twitter} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withLocalMoment(PostTemplateDetails)
