import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const OneCardSpread = (props) => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h4 className="white-text">
                    {props.question}
                </h4>
                <Card 
                    style={{ 
                        height: '500px',
                        width: '300px',
                        fontSize: '30px',
                        color: 'black'
                     }}
                />
            </div>
        </div>
    )
}

// -------------------------------------------------
export default OneCardSpread
// -------------------------------------------------