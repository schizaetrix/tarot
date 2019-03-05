import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render () {
        return (
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <Link 
                        to='/' 
                        className="brand-logo"
                    >
                        TAROT
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header