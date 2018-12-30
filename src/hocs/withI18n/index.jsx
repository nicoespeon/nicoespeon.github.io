import React from 'react'
import get from 'lodash/get'

function withI18n(WrappedComponent) {
  return props => {
    const { location } = props
    const pathName = get(location, 'pathname', '/')
    const lang = pathName.startsWith('/fr') ? 'fr' : 'en'

    let isHomePage
    let switchLangMenu
    if (lang === 'fr') {
      const page = get(location, 'pathname', '/fr/')
      const isTagPage = page.startsWith('/fr/tags')
      const isCategoryPage = page.startsWith('/fr/categories')
      isHomePage = page === '/fr/'

      let path
      if (isHomePage) {
        path = '/'
      } else if (isTagPage) {
        path = '/tags'
      } else if (isCategoryPage) {
        path = '/categories'
      } else {
        // Strip `/fr` from page with `slice(4)`
        path = page.slice(4)
      }
      switchLangMenu = [{ path, label: '🇬🇧 Switch to English' }]
    } else {
      const page = get(location, 'pathname', '/')
      const isTagPage = page.startsWith('/tags')
      const isCategoryPage = page.startsWith('/categories')
      isHomePage = page === '/'

      let path
      if (isHomePage) {
        path = '/fr/'
      } else if (isTagPage) {
        path = '/fr/tags'
      } else if (isCategoryPage) {
        path = '/fr/categories'
      } else {
        path = `/fr${page}`
      }
      switchLangMenu = [{ path, label: '🇫🇷 Basculer en français' }]
    }
    const i18n = { lang, switchLangMenu }

    return <WrappedComponent {...props} isHomePage={isHomePage} i18n={i18n} />
  }
}

export default withI18n
