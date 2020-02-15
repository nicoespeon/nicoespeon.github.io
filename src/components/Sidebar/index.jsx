import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Theme from '../Theme'
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
      <React.Fragment>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <div className="sidebar__author-content">
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
      </React.Fragment>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    const themeBlock = (
      <Theme lang={i18n.lang}>
        {(nextTheme, toggleTheme) => {
          const label = {
            en: `Switch to ${nextTheme} theme`,
            fr: `Basculer en thème ${nextTheme}`,
          }[i18n.lang]

          return <Menu data={[{ label, action: toggleTheme }]} />
        }}
      </Theme>
    )

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menus[i18n.lang]}>
              <li
                className="menu__list-item hide-sm"
                key="understandlegacycode.com"
              >
                🧭&nbsp;
                <a
                  href="https://understandlegacycode.com"
                  className="menu__list-item-link"
                  activeClassName="menu__list-item-link menu__list-item-link--active link-underlined"
                >
                  <strong>understand</strong>legacycode.com
                </a>
              </li>
            </Menu>
            <Links data={author} />
            {themeBlock}
            <Menu data={i18n.switchLangMenu} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
