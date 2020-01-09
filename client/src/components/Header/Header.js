import React from "react"
import { NavLink, Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth/GoogleAuth'


const Header = () => {

    return (
        <div className="ui secondary pointing menu">

            <Link to="/" className="item logo">
                <i className="large middle aligned icon video" />
                <span>Streams</span>
            </Link>
                <NavLink to="/diagrams" className="item">
                    Diagrams
                </NavLink>

            <div className="right menu">
                <NavLink exact to="/" className="item">
                    All Streams
                </NavLink>
                <div className="header-google">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header
