import React from 'react'
// -------------------------------------------------

const OneCardThumb = (props) => {
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
            </div>
        </div>
    )
}

// -------------------------------------------------
export default OneCardThumb
// -------------------------------------------------