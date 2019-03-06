import React from 'react'

import TheFool from '../images/cards/Majors 00 The Fool.jpg'


const DailyCard = () => {
    return (
        <div 
            className="row"
            style={{ 
                backgroundColor: '#424242'
            }}
        >
            <div
                id="daily-card-content"
                style={{
                    // paddingTop: 5,
                    paddingBottom: 30 
                }}
            >
                <h3 className="white-text">
                    Daily Card Draw
                </h3>
                <div className="col">
                    <div className="card">
                        <div className="card-image">
                            <img 
                                className="activator"
                                src={TheFool} 
                                id="the-fool" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyCard