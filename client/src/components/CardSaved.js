import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import { getCard } from '../actions'
// -------------------------------------------------

class CardSaved extends Component {
    componentDidMount () {
        const cardTooltip = document.getElementById(this.props.cardId)
        M.Tooltip.init(cardTooltip, {})
    }
    render () {
        const image = this.props.cardImage
        const title = this.props.cardTitle
        const id = this.props.cardId
        return (
            <div className="col">
                <div className="card-style">
                    <div 
                        className="card-image"
                        style={_.pick(
                            this.props.style,
                            'height',
                            'width'
                        )}
                    >
                        <Link
                            to={`/cards/${this.props.cardId}`}
                            onClick={() => {
                                this.props.getCard(image, title, id)
                            }}
                        >
                            <img 
                                src={this.props.cardImage}
                                alt={this.props.cardTitle}
                                style={this.props.style}
                                className="card-hover"
                            />
                        </Link>
                        <div 
                            className="
                                card-title center-align
                                tooltipped"
                            id={this.props.cardId}
                            data-position={this.props.tooltipPosition}
                            data-tooltip={this.props.cardTooltip}
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
export default connect(
    null,
    { getCard }
)(CardSaved)
// -------------------------------------------------