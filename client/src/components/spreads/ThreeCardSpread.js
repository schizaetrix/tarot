import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const ThreeCardSpread = (props) => {
    return (
        <div 
            className="row"
            id="background-image"
        >
            <div id="content-background">
                <h4 className="white-text">
                    {props.question}
                </h4>
                <div className="row">
                    <div className="col">
                        <Card 
                            style={{
                                height: '350px',
                                width: '210px',
                                fontSize: '20px',
                                color: 'black'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '350px',
                                width: '210px',
                                fontSize: '20px',
                                color: 'black'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '350px',
                                width: '210px',
                                fontSize: '20px',
                                color: 'black'
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