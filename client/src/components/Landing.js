import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div 
            className="row"
            id="background-image-landing"
        >
            <div id="landing-content">
                <h2 className="white-text">
                    Do you have a burning question?
                </h2>
                <Link
                    to="/readings/new"
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