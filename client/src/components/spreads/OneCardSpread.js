import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { saveReading } from '../../actions'
import Cards from '../../images/cardsDB'
import Card from '../Card'
// -------------------------------------------------

class OneCardSpread extends Component {
    constructor (props) {
        super(props)
        let randomCard = Cards[Math.floor(Math.random()*Cards.length)]
        let image = randomCard.image
        let title = randomCard.title
        let id = randomCard.id
        this.state = {
            cardImage: image,
            cardTitle: title,
            cardId: id
        }
    }
    onClickSave = () => {
        const state = this.state
        const id = this.props.readingId
        this.props.saveReading(id, state)
    }
    render () {
        return (
            <div 
                className="row"
                id="background-image"
            >
                <div id="content-background">
                    <h4 className="white-text">
                        {this.props.question}
                    </h4>
                    <Card 
                        style={{ 
                            height: '500px',
                            width: '300px',
                            fontSize: '30px',
                            color: 'black'
                        }}
                        cardImage={this.state.cardImage}
                        cardTitle={this.state.cardTitle}
                        cardId={this.state.cardId}
                        readingId={this.props.readingId}
                    />
                </div>
                <button 
                    className="                        
                        btn-floating btn-large 
                        purple darken-3"
                    onClick={this.onClickSave}
                    id="save-btn"
                >
                    <i className="large material-icons">
                        save
                    </i>
                </button>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { saveReading }
)(OneCardSpread)
// -------------------------------------------------