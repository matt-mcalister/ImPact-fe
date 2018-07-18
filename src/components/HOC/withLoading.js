import React from 'react'

import { connect } from "react-redux"
// import AppConsumer from './context/AppConsumer'


const withLoading = (Component) => {
  const loadingComponent = (props) => {
    if (props.loading){
      return <div id="loading"></div>
    } else {
      return <Component />
    }
  }
  // return AppConsumer(loadingComponent)
  return connect(state => {return {loading: state.loading.value}},null)(loadingComponent)
}

export default withLoading;
