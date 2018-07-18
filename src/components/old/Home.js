import React from 'react';

import withAuthorization from './withAuthorization'

const Home= () => {
  return (
    <div className="everyMainBody">
      <h1>Home</h1>
    </div>
  )
}

export default withAuthorization(Home);
