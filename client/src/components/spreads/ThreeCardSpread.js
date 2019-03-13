import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
// -------------------------------------------------
import { saveReadingThree } from '../../actions'
import Cards from '../../images/cardsDB'
import Card from '../Card'
// -------------------------------------------------

class ThreeCardSpread extends Component {
    constructor (props) {
        super(props)
        let randomCard1 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard2 = Cards[Math.floor(Math.random()*Cards.length)]
        let randomCard3 = Cards[Math.floor(Math.random()*Cards.length)]
        let image1 = randomCard1.image
        let title1 = randomCard1.title
        let id1 = randomCard1.id
        let image2 = randomCard2.image
        let title2 = randomCard2.title
        let id2 = randomCard2.id
        let image3 = randomCard3.image
        let title3 = randomCard3.title
        let id3 = randomCard3.id
        this.state = {
            cardImage1: image1,
            cardTitle1: title1,
            cardId1: id1,
            cardImage2: image2,
            cardTitle2: title2,
            cardId2: id2,
            cardImage3: image3,
            cardTitle3: title3,
            cardId3: id3
        }
    }
    componentDidMount () {
        let saveTooltip = document.getElementById('save')
        M.Tooltip.init(saveTooltip, {})
    }
    onClickSave = () => {
        const state = this.state
        const id = this.props.readingId
        this.props.saveReadingThree(id, state)
    }
    render () {
        return (
            <div className="row background-image">
                <button 
                    className="                        
                        btn-floating btn-large 
                        waves-effect waves-light
                        purple darken-3
                        fixed-action-btn tooltipped"
                    data-position="right"
                    data-tooltip="Save Your Cards"
                    id="save"
                    onClick={this.onClickSave}
                >
                    <i className="large material-icons">
                        save
                    </i>
                </button>
                <div className="content-background">
                    <h4 className="white-text">
                        {this.props.question}
                    </h4>
                    <div className="row">
                        <div className="col">
                            <Card 
                                style={{
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
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
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
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
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
                                    color: 'black'
                                }}
                                cardImage={this.state.cardImage3}
                                cardTitle={this.state.cardTitle3}
                                cardId={this.state.cardId3}
                            />
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
    { saveReadingThree }
)(ThreeCardSpread)
// -------------------------------------------------