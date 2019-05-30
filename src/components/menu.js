import { Link } from "gatsby"
import React from "react"
import "./style.css"

const menu = () => (
  <nav>
    <div className="nav-container">
      <div className="nav-branding">
        <Link to="/">ELLIPSIS</Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default menu
