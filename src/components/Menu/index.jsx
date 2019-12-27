import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

function renderLink(item) {
  return (
    <li className="menu__list-item" key={item.path}>
      <Link
        to={item.path}
        className="menu__list-item-link"
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

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (item.path ? renderLink(item) : renderAction(item)))}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
