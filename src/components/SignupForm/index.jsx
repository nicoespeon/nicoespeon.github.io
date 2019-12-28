import React from 'react'
import './style.scss'

function SignupForm({ lang }) {
  if (lang !== 'en') return null

  const botsHoneypot = (
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
      <input
        type="text"
        name="b_ca05d369ee1b4a4e803dce32c_2fd39e1501"
        tabIndex="-1"
        defaultValue=""
      />
    </div>
  )

  return (
    <form
      action="https://nicoespeon.us4.list-manage.com/subscribe/post?u=ca05d369ee1b4a4e803dce32c&amp;id=2fd39e1501"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <span className="highlighted">
        <h2>
          Get fresh content from{' '}
          <span className="highlighted__text">my newsletter</span>
        </h2>
      </span>
      <p>
        Receive an email{' '}
        <a
          href="https://us4.campaign-archive.com/home/?u=ca05d369ee1b4a4e803dce32c&id=2fd39e1501"
          target="_blank"
          rel="noreferrer noopener"
        >
          like this one
        </a>{' '}
        when I publish new content, <strong>before everyone else!</strong>
      </p>
      <div className="form-inline">
        <input
          className="form-inline__input form-inline__name"
          type="name"
          placeholder="Name"
          name="FNAME"
        />
        <input
          className="form-inline__input form-inline__email"
          type="email"
          placeholder="Email"
          name="EMAIL"
          required
        />
        {botsHoneypot}
        <button className="form-inline__submit" type="submit">
          Subscribe <i className="icon-paper-plane" />
        </button>
      </div>
    </form>
  )
}

export default SignupForm
