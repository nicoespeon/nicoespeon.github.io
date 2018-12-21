import React from 'react'
import moment from 'moment'
import 'moment/locale/fr'

function withLocalMoment(WrappedComponent) {
  return props => {
    const localMoment = date => moment(date).locale(props.i18n.lang)
    return <WrappedComponent {...props} localMoment={localMoment} />
  }
}

export default withLocalMoment
