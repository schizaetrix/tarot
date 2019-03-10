import _ from 'lodash'
import React, { Component } from 'react'
// -------------------------------------------------
import Cards from '../images/cardsDB'
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
        var randomCard = Cards[Math.floor(Math.random()*Cards.length)]
        return (
            <div className="flip-card-back">
                <div className="card-image">
                    <img 
                        src={randomCard.image}
                        alt={randomCard.title}
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
                    {randomCard.title}
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