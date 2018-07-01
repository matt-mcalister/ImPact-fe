import React from "react"

const ProtectedPage = (props) => {
  return (
    <div id="password">
        <form id="passwordForm" onSubmit={props.handleSubmit}>
          <label htmlFor="password">Password: </label><br />
          <input id="passwordInput" type="password" name="password" value={props.passwordInput} onChange={props.updatePassword} /><br />
          <input id="submit" type="submit" />
        </form>
      </div>
  )
}

export default ProtectedPage
