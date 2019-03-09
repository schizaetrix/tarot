import _ from 'lodash'
import React, { Component } from 'react'
// -------------------------------------------------
import Cards from '../images/cardsDB'
// -------------------------------------------------

class Card extends Component {
    render () {
        var randomCard = Cards[Math.floor(Math.random()*Cards.length)]
        return (
            <div className="col">
                <div className="card z-depth-5">
                    <div className="card-image">
                        <img 
                            className="activator"
                            src={randomCard.image}
                            alt={randomCard.title}
                            id="card-style"
                            style={this.props.style}
                        />
                    </div>
                    <div 
                        className="card-title center-align"
                        style={_.pick(
                            this.props.style,
                            'fontSize',
                            'color'
                        )}
                    >
                        {randomCard.title}
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default Card
// -------------------------------------------------