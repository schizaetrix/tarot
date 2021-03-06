import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// -------------------------------------------------
import GoogleAuth from './GoogleAuth'
// -------------------------------------------------

class Header extends Component {
    render () {
        return (
            <nav style={{ position: 'fixed' }}>
                <div className="nav-wrapper purple darken-3">
                    <Link 
                        to='/' 
                        className="brand-logo center"
                    >
                        The BOOK of TAROT
                    </Link>
                    <ul className="right">
                        <GoogleAuth />
                    </ul>
                </div>
            </nav>
        )
    }
}

// -------------------------------------------------
export default Header
// -------------------------------------------------