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

      // Strip `/fr` from page with `slice(4)`
      const path = isHomePage
        ? '/'
        : isTagPage ? '/tags' : isCategoryPage ? '/categories' : page.slice(4)
      switchLangMenu = [{ path, label: '🇬🇧 Switch to English' }]
    } else {
      const page = get(location, 'pathname', '/')
      const isTagPage = page.startsWith('/tags')
      const isCategoryPage = page.startsWith('/categories')
      isHomePage = page === '/'

      const path = isHomePage
        ? '/fr/'
        : isTagPage
          ? '/fr/tags'
          : isCategoryPage ? '/fr/categories' : `/fr${page}`
      switchLangMenu = [{ path, label: '🇫🇷 Basculer en français' }]
    }
    const i18n = { lang, switchLangMenu }

    return <WrappedComponent {...props} isHomePage={isHomePage} i18n={i18n} />
  }
}

export default withI18n
