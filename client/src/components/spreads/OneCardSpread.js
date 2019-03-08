import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const OneCardSpread = () => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h3 className="white-text">
                    One Card Draw
                </h3>
                <Card 
                    style={{ 
                        height: '500px',
                        width: '300px',
                        fontSize: '30px'
                     }}
                />
            </div>
        </div>
    )
}

// -------------------------------------------------
export default OneCardSpread
// -------------------------------------------------