import React from 'react'
import '../../assets/scss/init.scss'

const THEME = {
  light: 'light',
  dark: 'dark',
}

class Theme extends React.Component {
  constructor(props) {
    super(props)

    let initialTheme
    if (localStorage) {
      initialTheme = localStorage.getItem('theme') || THEME.light
    } else {
      initialTheme = THEME.light
    }

    this.state = {
      theme: initialTheme,
    }
  }

  componentDidMount() {
    if (document) {
      this.setThemeToHtmlOf(document)
    }
  }

  componentWillUnmount() {
    // No need to clean the <html> theme for our usage.
  }

  componentDidUpdate() {
    if (document) {
      this.setThemeToHtmlOf(document)
    }

    if (localStorage) {
      localStorage.setItem('theme', this.state.theme)
    }
  }

  render() {
    const { lang } = this.props
    const nextTheme = {
      en: {
        [THEME.dark]: 'dark',
        [THEME.light]: 'light',
      },
      fr: {
        [THEME.dark]: 'sombre',
        [THEME.light]: 'clair',
      },
    }[lang][this.nextTheme(this.state.theme)]

    return this.props.children(nextTheme, this.toggleTheme.bind(this))
  }

  setThemeToHtmlOf(document) {
    const html = document.getElementsByTagName('html')[0]
    if (html) {
      html.setAttribute('data-theme', this.state.theme)
    }
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme: this.nextTheme(prevState.theme),
    }))
  }

  nextTheme(currentTheme) {
    return currentTheme === THEME.dark ? THEME.light : THEME.dark
  }
}

export default Theme
