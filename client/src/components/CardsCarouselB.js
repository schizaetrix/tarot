import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import { getCard } from '../actions'

class CardsCarouselB extends Component {
    componentDidMount () {
        const carousel = document.getElementById(this.props.carouselId)
        const options = {
            numVisible: 12,
            dist: -50
        }
        M.Carousel.init(carousel, options)
    }
    renderCarouselItems (cardsArray) {
        return (
            cardsArray.map((card) => {
                const image = card.image
                const title = card.title
                const id = card.id
                return (
                    <Link
                        to={`/cards/${card.id}`}
                        className="carousel-item"
                        key={card.id}
                        onClick={() => {
                            this.props.getCard(image, title, id)
                        }}
                    >
                        {card.title}
                        <img 
                            src={card.image}
                            alt={card.title}
                            style={{
                                paddingBottom: '20px',
                                borderBottom: '3px solid #6a1b9a'
                            }}
                        />
                    </Link>
                )
            })
        )
    }
    render () {
        return (
            <div 
                className="carousel"
                id={this.props.carouselId}
                style={{ 
                    overflow: 'visible',
                    marginBottom: '20px'
                }}
            >
                {this.renderCarouselItems(this.props.searchState)}
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { getCard }
)(CardsCarouselB)
// -------------------------------------------------