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
        let images = [
            randomCard1.image, randomCard2.image, randomCard3.image
        ]
        let titles = [
            randomCard1.title, randomCard2.title, randomCard3.title
        ]
        let ids = [
            randomCard1.id, randomCard2.id, randomCard3.id
        ]
        let tooltips = [
            randomCard1.tooltip, randomCard2.tooltip, randomCard3.tooltip
        ]
        this.state = {
            card1: {
                image: images[0],
                title: titles[0],
                id: ids[0],
                tooltip: tooltips[0]
            },
            card2: {
                image: images[1],
                title: titles[1],
                id: ids[1],
                tooltip: tooltips[1]
            },
            card3: {
                image: images[2],
                title: titles[2],
                id: ids[2],
                tooltip: tooltips[2]
            }
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
        M.toast({
            html: 'Your cards have been saved!'
        })
    }
    render () {
        return (
            <div className="row background-image">
                <button 
                    className="                        
                        btn-floating btn-large 
                        waves-effect waves-light
                        purple darken-3 pulse
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
                                cardImage={this.state.card1.image}
                                cardTitle={this.state.card1.title}
                                cardId={this.state.card1.id}
                                cardTooltip={this.state.card1.tooltip}
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
                                cardImage={this.state.card2.image}
                                cardTitle={this.state.card2.title}
                                cardId={this.state.card2.id}
                                cardTooltip={this.state.card2.tooltip}
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
                                cardImage={this.state.card3.image}
                                cardTitle={this.state.card3.title}
                                cardId={this.state.card3.id}
                                cardTooltip={this.state.card3.tooltip}
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