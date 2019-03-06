import React, { Component } from 'react'

import Cards from '../images/cardsDB'


class Card extends Component {
    render () {
        var randomCard = Cards[Math.floor(Math.random()*Cards.length)]
        return (
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img 
                            className="activator"
                            src={randomCard.image} 
                            id="card-style" 
                        />
                    </div>
                    <div className="card-title">{randomCard.title}</div>
                </div>
            </div>
        )
    }
}

export default Card