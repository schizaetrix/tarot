import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import Cards from '../images/cardsDB'
import BackButton from './BackButton'
// -------------------------------------------------

class CardPage extends Component {
    constructor (props) {
        super(props)
        let cardInfo
        Cards.forEach((card) => {
            if (card.id === this.props.card.id) {
                cardInfo = card.info
            }
        })
        this.state = {
            info: cardInfo
        }
    }
    render () {
        return (
            <div className="row background-image">
                <BackButton 
                    backBtnRoute={() => window.history.back()}
                    backBtnTooltip="Previous Page"
                />
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
            </div>
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