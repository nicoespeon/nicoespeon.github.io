import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { isHomePage, i18n } = this.props
    const {
      author,
      subtitles,
      menus,
      greetings,
    } = this.props.data.site.siteMetadata

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {greetings[i18n.lang]}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {greetings[i18n.lang]}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitles[i18n.lang]}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menus[i18n.lang]} />
            <Links data={author} />
            <Menu data={i18n.switchLangMenu} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
