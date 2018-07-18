import React from "react"
import { Link } from "react-router-dom"

const Footer = (props) => {
  return (
    <div id="footer">
      <Link to="/">Home</Link>
      <Link to="/terms">Terms of Service</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Footer;
