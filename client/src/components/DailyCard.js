import React from 'react'

import Card from './Card'


const DailyCard = () => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h3 className="white-text">
                    Daily Card Draw
                </h3>
                <Card />
            </div>
        </div>
    )
}

export default DailyCard