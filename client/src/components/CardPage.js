import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// -------------------------------------------------
import Cards from '../images/cardsDB'
import BackButton from './BackButton'
// -------------------------------------------------

class CardPage extends Component {
    constructor (props) {
        super(props)
        let cardInfo
        for (let i = 0; i < Cards.length; i++) {
            if (Cards[i].id === this.props.card.id) {
                cardInfo = Cards[i].info
            }
        }
        this.state = {
            info: cardInfo
        }
    }
    render () {
        return ReactDOM.createPortal(
            <div className="row background-image">
                <BackButton />
                <div className="content-background white-text">
                    <h4>{this.props.card.title}</h4>
                    <div 
                        className="row container"
                        style={{ marginTop: '50px' }}
                    >
                        <div className="col s6 card-page-image">
                            <img 
                                src={this.props.card.image}
                                alt={this.props.card.title}
                                style={{
                                    height: '600px',
                                    width: '350px'
                                }}
                            />
                        </div>
                        <div 
                            className="col s6 card-info"
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ padding: '20px' }}>
                                {this.state.info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector('#cardpage')
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return {
        card: state.card
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(CardPage)
// -------------------------------------------------