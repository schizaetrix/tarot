import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading } from '../../actions'
import ActionMenu from '../ActionMenu'
import SaveOneCardSpread from '../spreads/SaveOneCardSpread'
import SaveThreeCardSpread from '../spreads/SaveThreeCardSpread'
import SaveFiveCardSpread from '../spreads/SaveFiveCardSpread'
// -------------------------------------------------

class SaveReading extends Component {
    componentDidMount () {
        this.props.fetchReading(this.props.match.params.id)
    }
    renderSpread () {
        const { 
            id, question, spread, 
            cardImage, cardTitle, cardId
        } = this.props.reading
        switch (spread) {
            case 'One Card Spread':
                return (
                    <SaveOneCardSpread 
                        readingId={id}
                        question={question}
                        cardImage={cardImage}
                        cardTitle={cardTitle}
                        cardId={cardId}
                    />
                )
            case 'Three Card Spread':
                return (
                    <SaveThreeCardSpread 
                        readingId={id}
                        question={question}
                    />
                )
            default:
                return (
                    <SaveFiveCardSpread 
                        readingId={id}
                        question={question} 
                    />
                )
        }
    }
    render () {
        if (!this.props.reading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ActionMenu 
                    reading={this.props.reading}
                />
                <div className="white-text">
                    {this.renderSpread()}
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state, ownProps) => {
    return { 
        reading: state.readings[ownProps.match.params.id] 
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReading }
)(SaveReading)
// -------------------------------------------------