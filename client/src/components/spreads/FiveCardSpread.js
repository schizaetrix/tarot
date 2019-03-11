import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { saveReadingFive } from '../../actions'
import Cards from '../../images/cardsDB'
import Card from '../Card'
// -------------------------------------------------

class FiveCardSpread extends Component {
    constructor (props) {
        super(props)
        let randomCard1 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard2 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard3 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard4 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard5 = Cards[Math.floor(Math.random()*Cards.length)]
        let image1 = randomCard1.image
        let title1 = randomCard1.title
        let id1 = randomCard1.id
        let image2 = randomCard2.image
        let title2 = randomCard2.title
        let id2 = randomCard2.id
        let image3 = randomCard3.image
        let title3 = randomCard3.title
        let id3 = randomCard3.id
        let image4 = randomCard4.image
        let title4 = randomCard4.title
        let id4 = randomCard4.id
        let image5 = randomCard5.image
        let title5 = randomCard5.title
        let id5 = randomCard5.id
        this.state = {
            cardImage1: image1,
            cardTitle1: title1,
            cardId1: id1,
            cardImage2: image2,
            cardTitle2: title2,
            cardId2: id2,
            cardImage3: image3,
            cardTitle3: title3,
            cardId3: id3,
            cardImage4: image4,
            cardTitle4: title4,
            cardId4: id4,
            cardImage5: image5,
            cardTitle5: title5,
            cardId5: id5
        }
    }
    onClickSave = () => {
        const state = this.state
        const id = this.props.readingId
        this.props.saveReadingFive(id, state)
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
                    <div className="row">
                        <div className="col">
                            <Card 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage1}
                                cardTitle={this.state.cardTitle1}
                                cardId={this.state.cardId1}
                            />
                        </div>
                        <div className="col">
                            <Card 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage2}
                                cardTitle={this.state.cardTitle2}
                                cardId={this.state.cardId2}
                            />
                        </div>
                        <div className="col">
                            <Card 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage3}
                                cardTitle={this.state.cardTitle3}
                                cardId={this.state.cardId3}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage4}
                                cardTitle={this.state.cardTitle4}
                                cardId={this.state.cardId4}
                            />
                        </div>
                        <div className="col">
                            <Card 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage5}
                                cardTitle={this.state.cardTitle5}
                                cardId={this.state.cardId5}
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
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { saveReadingFive }
)(FiveCardSpread)
// -------------------------------------------------