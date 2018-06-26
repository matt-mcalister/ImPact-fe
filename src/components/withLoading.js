import React from 'react'

import AppConsumer from './context/AppConsumer'

const withLoading = (Component) => {
  const loadingComponent = (props) => {
    if (props.context.loading){
      return <div id="loading"></div>
    } else {
      return <Component />
    }
  }
  return AppConsumer(loadingComponent)
}

export default withLoading;
