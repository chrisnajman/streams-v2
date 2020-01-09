import React from "react"
import { Link } from 'react-router-dom'

const NoMatch = () => (

  <React.Fragment>
    <h1>Page not found!</h1>
    <p><Link to="/" className="arrowLinkLeft center">Go to Home Page</Link></p>
  </React.Fragment>

)

export default NoMatch
