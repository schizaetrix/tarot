import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>
                Do you have a burning question?
            </h2>
            <Link
                to="/reading"
                className="btn purple darken-3"
            >
                Step into the Reading Room
            </Link>
        </div>
    )
}

export default Landing