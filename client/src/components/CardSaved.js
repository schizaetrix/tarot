import _ from 'lodash'
import React, { Component } from 'react'
// -------------------------------------------------

class CardSaved extends Component {
    render () {
        return (
            <div className="col">
                <div className="card-style">
                    <div className="card-image">
                        <img 
                            src={this.props.cardImage}
                            alt={this.props.cardTitle}
                            id={this.props.cardId}
                            style={this.props.style}
                        />
                        <div 
                            className="card-title center-align"
                            style={_.pick(
                                this.props.style,
                                'fontSize',
                                // 'color'
                            )}
                        >
                            {this.props.cardTitle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default CardSaved
// -------------------------------------------------