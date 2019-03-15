import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
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
        let tooltip = randomCard.tooltip
        this.state = {
            card1: { image, title, id, tooltip }
        }
    }
    componentDidMount () {
        let saveTooltip = document.getElementById('save')
        M.Tooltip.init(saveTooltip, {})
    }
    onClickSave = () => {
        const state = this.state
        const id = this.props.readingId
        this.props.saveReadingOne(id, state)
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
                        first-btn tooltipped"
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
                    <Card 
                        style={{ 
                            height: '500px',
                            width: '300px',
                            fontSize: '30px',
                            color: 'black'
                        }}
                        cardImage={this.state.card1.image}
                        cardTitle={this.state.card1.title}
                        cardId={this.state.card1.id}
                        cardTooltip={this.state.card1.tooltip}
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