import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const FiveCardSpread = () => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h3 className="white-text">
                    Five Card Spread
                </h3>
                <div className="row">
                    <div className="col">
                        <Card 
                            style={{
                                height: '285px',
                                width: '180px',
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '285px',
                                width: '180px',
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '285px',
                                width: '180px',
                                fontSize: '20px'
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card 
                            style={{
                                height: '285px',
                                width: '180px',
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '285px',
                                width: '180px',
                                fontSize: '20px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// -------------------------------------------------
export default FiveCardSpread
// -------------------------------------------------