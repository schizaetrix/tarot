import _ from 'lodash'
import React, { Component } from 'react'
import M from 'materialize-css'
// -------------------------------------------------

class CardSaved extends Component {
    componentDidMount () {
        let cardTooltip = document.getElementById(this.props.cardId)
        M.Tooltip.init(cardTooltip, {})
    }
    render () {
        return (
            <div className="col">
                <div className="card-style">
                    <div className="card-image">
                        <img 
                            className="tooltipped"
                            src={this.props.cardImage}
                            alt={this.props.cardTitle}
                            id={this.props.cardId}
                            style={this.props.style}
                            data-position={this.props.tooltipPosition}
                            data-tooltip={this.props.cardTooltip}
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