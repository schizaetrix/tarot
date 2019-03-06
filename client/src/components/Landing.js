import React from 'react'
import { Link } from 'react-router-dom'

import Marseilles1 from '../images/marseilles1.jpeg'


const Landing = () => {
    return (
        <div 
            className="row"
            style={{ 
                backgroundImage: `url(${Marseilles1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div
                id="landing-content"
                style={{
                    paddingTop: 30,
                    paddingBottom: 175 
                }}
            >
                <h2 className="white-text">
                    Do you have a burning question?
                </h2>
                <Link
                    to="/dailycard"
                    className="btn purple darken-3"
                    style={{ marginTop: 10 }}
                >
                    Step into the Reading Room
                </Link>
            </div>
        </div>
    )
}

export default Landing