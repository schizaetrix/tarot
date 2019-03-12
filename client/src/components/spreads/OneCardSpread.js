import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { saveReadingOne } from '../../actions'
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
            cardImage1: image,
            cardTitle1: title,
            cardId1: id
        }
    }
    onClickSave = () => {
        const state = this.state
        const id = this.props.readingId
        this.props.saveReadingOne(id, state)
    }
    render () {
        return (
            <div 
                className="row"
                id="background-image"
            >
                <button 
                    className="                        
                        btn-floating btn-large 
                        waves-effect waves-light
                        purple darken-3
                        fixed-action-btn"
                    onClick={this.onClickSave}
                >
                    <i className="large material-icons">
                        save
                    </i>
                </button>
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
                        cardImage={this.state.cardImage1}
                        cardTitle={this.state.cardTitle1}
                        cardId={this.state.cardId1}
                    />
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { saveReadingOne }
)(OneCardSpread)
// -------------------------------------------------