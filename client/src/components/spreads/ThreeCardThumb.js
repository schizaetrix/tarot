import React from 'react'
// -------------------------------------------------

const ThreeCardThumb = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img 
                            alt={props.cardTitle1}
                            src={props.cardImage1}
                            style={props.style}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img 
                            alt={props.cardTitle2}
                            src={props.cardImage2}
                            style={props.style}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img 
                            alt={props.cardTitle3}
                            src={props.cardImage3}
                            style={props.style}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// -------------------------------------------------
export default ThreeCardThumb
// -------------------------------------------------