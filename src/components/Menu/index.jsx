import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(
          item => (item.path ? this.renderLink(item) : this.renderAction(item))
        )}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }

  renderLink(item) {
    return (
      <li className="menu__list-item" key={item.path}>
        <Link
          to={item.path}
          className="menu__list-item-link"
          activeClassName="menu__list-item-link menu__list-item-link--active"
        >
          {item.label}
        </Link>
      </li>
    )
  }

  renderAction(item) {
    return (
      <li className="menu__list-item" key={item.label}>
        <span className="menu__list-item-link" onClick={item.action}>
          {item.label}
        </span>
      </li>
    )
  }
}

export default Menu
