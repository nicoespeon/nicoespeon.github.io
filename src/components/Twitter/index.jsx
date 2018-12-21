import React from 'react'
import './style.scss'

function Twitter(props) {
  const { author, lang } = props

  const followMe = {
    en: `Follow @${author}`,
    fr: `Suivez @${author}`,
  }[lang]

  return (
    <ul className="twitter">
      <li>
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?via=${author}`}
          data-size="large"
        >
          Tweet
        </a>
      </li>
      <li>
        <a
          className="twitter-follow-button"
          href={`https://twitter.com/${author}`}
          data-show-count="false"
          data-size="large"
        >
          {followMe}
        </a>
      </li>
    </ul>
  )
}

export default Twitter
