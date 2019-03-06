import React from 'react'
import { Link } from 'react-router-dom'

import Marseilles1 from '../images/marseilles1.jpeg'


const Landing = () => {
    return (
        <div 
            className="row"
            style={{ 
                background: `
                    linear-gradient( 
                        rgba(0, 0, 0, 0.50), 
                        rgba(0, 0, 0, 0.50) 
                    ), 
                    url(${Marseilles1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div id="landing-content">
                <h2 className="white-text">
                    Do you have a burning question?
                </h2>
                <Link
                    to="/dailycard"
                    className="
                        btn
                        purple darken-3
                        waves-effect 
                        waves-light 
                    "
                    style={{ marginTop: 10 }}
                >
                    Step into the Reading Room
                </Link>
            </div>
        </div>
    )
}

export default Landing