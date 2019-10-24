import PropTypes from "prop-types"
import React from "react"

import "./header.scss"


const Header = ({ siteTitle }) => (
  <header>
      <div>
        <h1>Kolorisol'</h1>
      </div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Nos travaux</li>
          <li>Nos activités</li>
          <li>Contact</li>
        </ul>
      </nav>    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
