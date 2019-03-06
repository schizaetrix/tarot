import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render () {
        return (
            <nav>
                <div className="nav-wrapper purple darken-3">
                    <Link 
                        to='/' 
                        className="brand-logo center"
                    >
                        TAROT
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header