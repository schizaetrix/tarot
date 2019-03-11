import React from 'react'
// -------------------------------------------------
import Card from '../Card'
// -------------------------------------------------

const SaveFiveCardSpread = (props) => {
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
                                height: '290px',
                                width: '170px',
                                fontSize: '18px',
                                color: 'black'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '290px',
                                width: '170px',
                                fontSize: '18px',
                                color: 'black'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '290px',
                                width: '170px',
                                fontSize: '18px',
                                color: 'black'
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card 
                            style={{
                                height: '290px',
                                width: '170px',
                                fontSize: '18px',
                                color: 'black'
                            }}
                        />
                    </div>
                    <div className="col">
                        <Card 
                            style={{
                                height: '290px',
                                width: '170px',
                                fontSize: '18px',
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
export default SaveFiveCardSpread
// -------------------------------------------------