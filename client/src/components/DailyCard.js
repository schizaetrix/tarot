import React from 'react'

import Card from './Card'
import Marseilles1 from '../images/marseilles1.jpeg'


const DailyCard = () => {
    return (
        <div 
            className="row"
            // id="daily-card-row"
            style={{ 
                background: `
                    linear-gradient( 
                        rgba(0, 0, 0, 0.75), 
                        rgba(0, 0, 0, 0.75) ), 
                        url(${Marseilles1}
                    )
                `,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div id="daily-card-content">
                <h3 className="white-text">
                    Daily Card Draw
                </h3>
                <Card />
            </div>
        </div>
    )
}

export default DailyCard