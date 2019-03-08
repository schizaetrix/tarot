import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const ThreeCardSpread = () => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h3 className="white-text">
                    Three Card Spread
                </h3>
                <div className="row">
                    <div className="col">
                        <Card 
                            style={{
                                height: '300px',
                                width: '185px'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '300px',
                                width: '185px'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '300px',
                                width: '185px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// -------------------------------------------------
export default ThreeCardSpread
// -------------------------------------------------