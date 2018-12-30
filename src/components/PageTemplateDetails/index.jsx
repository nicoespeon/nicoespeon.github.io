import React from 'react'
import Sidebar from '../Sidebar'
import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div
                className="page__body"
                /* eslint-disable react/no-danger */
                dangerouslySetInnerHTML={{ __html: page.html }}
                /* eslint-enable react/no-danger */
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
