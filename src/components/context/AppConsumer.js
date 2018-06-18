import React from 'react';
import AppContext from './AppContext';

const AppConsumer = (Component) => {
  return (props) => {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}

export default AppConsumer;
