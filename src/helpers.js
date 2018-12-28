export function formatTimeToRead(timeToRead, lang) {
  const cupCount = Math.round(timeToRead / 5) || 1
  const cups = new Array(cupCount).fill('☕').join('')

  return {
    en: `${cups} ${timeToRead} min read`,
    fr: `${cups} ${timeToRead} min de lecture`,
  }[lang]
}
