import React from "react"
import { Link } from "react-router-dom"

const Footer = (props) => {
  return (
    <div id="footer">
      <Link to="/terms">Terms of Service</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </div>
  )
}

export default Footer;
