import _ from 'lodash'
import React, { Component } from 'react'
// -------------------------------------------------
import cardsBack from '../images/cards/Card Back - Death Rose Tiles.jpg'
// -------------------------------------------------

class Card extends Component {
    renderCardFront () {
        return (
            <div className="flip-card-front">
                <div className="card-image">
                    <img 
                        src={cardsBack}
                        alt="Hover to Reveal"
                        style={this.props.style}
                    />
                </div>
                <div 
                    className="card-title center-align"
                    style={_.pick(
                        this.props.style,
                        'fontSize',
                        // 'color'
                    )}
                >
                    Hover to Reveal
                </div>
            </div>
        )
    }
    renderCardBack () {
        return (
            <div className="flip-card-back">
                <div className="card-image">
                    <img 
                        src={this.props.cardImage}
                        alt={this.props.cardTitle}
                        id={this.props.cardId}
                        style={this.props.style}
                    />
                </div>
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
        )
    }
    render () {
        return (
            <div className="col">
                <div 
                    className="flip-card card-style"
                    style={_.pick(
                        this.props.style,
                        'height',
                        'width'
                    )}
                >
                    <div className="flip-card-inner">
                            {this.renderCardFront()}
                            {this.renderCardBack()}
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default Card
// -------------------------------------------------