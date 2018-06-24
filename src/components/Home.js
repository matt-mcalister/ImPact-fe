import React from 'react';

import withAuthorization from './withAuthorization'

const Home= () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default withAuthorization(Home);
