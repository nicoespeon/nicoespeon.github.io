import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

function renderLink(item, hideOnSm) {
  let className = 'menu__list-item-link'
  if (hideOnSm) {
    className += ' hide-sm'
  }

  return (
    <li className="menu__list-item" key={item.path}>
      <Link
        to={item.path}
        className={className}
        activeClassName="menu__list-item-link menu__list-item-link--active link-underlined"
      >
        {item.label}
      </Link>
    </li>
  )
}

function renderAction(item) {
  return (
    <li className="menu__list-item" key={item.label}>
      <span
        className="menu__list-item-link"
        role="button"
        tabIndex={0}
        onClick={item.action}
        onKeyPress={item.action}
      >
        {item.label}
      </span>
    </li>
  )
}

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    /* eslint-disable no-confusing-arrow */
    const menuBlock = (
      <ul className="menu__list">
        {menu.map((item, i) =>
          item.path ? renderLink(item, i > 2) : renderAction(item)
        )}
      </ul>
    )
    /* eslint-enable no-confusing-arrow */

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
