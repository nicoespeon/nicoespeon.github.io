import React from 'react'
import '../../assets/scss/init.scss'

const THEME = {
  light: 'light',
  dark: 'dark',
}

function getNextTheme(currentTheme) {
  return currentTheme === THEME.dark ? THEME.light : THEME.dark
}

class Theme extends React.Component {
  constructor(props) {
    super(props)

    let initialTheme
    if (typeof localStorage !== 'undefined') {
      initialTheme = localStorage.getItem('theme') || THEME.light
    } else {
      initialTheme = THEME.light
    }

    this.state = {
      theme: initialTheme,
    }
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      this.setThemeToHtmlOf(document)
    }
  }

  componentDidUpdate() {
    if (typeof document !== 'undefined') {
      this.setThemeToHtmlOf(document)
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.state.theme)
    }
  }

  componentWillUnmount() {
    // No need to clean the <html> theme for our usage.
  }

  setThemeToHtmlOf(document) {
    const html = document.getElementsByTagName('html')[0]
    if (html) {
      html.setAttribute('data-theme', this.state.theme)
    }
  }

  toggleTheme() {
    this.setState(prevState => {
      return {
        theme: getNextTheme(prevState.theme),
      }
    })
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
    }[lang][getNextTheme(this.state.theme)]

    return this.props.children(nextTheme, this.toggleTheme.bind(this))
  }
}

export default Theme
