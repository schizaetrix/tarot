import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
// -------------------------------------------------
import { fetchReading, noteReading } from '../../actions'
import ActionMenu from '../ActionMenu'
import SideNote from '../SideNote'
import SaveOneCardSpread from '../spreads/SaveOneCardSpread'
import SaveThreeCardSpread from '../spreads/SaveThreeCardSpread'
import SaveFiveCardSpread from '../spreads/SaveFiveCardSpread'
// -------------------------------------------------

class SaveReading extends Component {
    componentDidMount () {
        M.AutoInit()
        this.props.fetchReading(this.props.match.params.id)
    }
    renderSpread () {
        const { 
            id, question, spread, 
            cardImage1, cardTitle1, cardId1,
            cardImage2, cardTitle2, cardId2,
            cardImage3, cardTitle3, cardId3,
            cardImage4, cardTitle4, cardId4,
            cardImage5, cardTitle5, cardId5
        } = this.props.reading
        switch (spread) {
            case 'One Card Spread':
                return (
                    <SaveOneCardSpread 
                        readingId={id}
                        question={question}
                        cardImage1={cardImage1}
                        cardTitle1={cardTitle1}
                        cardId1={cardId1}
                    />
                )
            case 'Three Card Spread':
                return (
                    <SaveThreeCardSpread 
                        readingId={id}
                        question={question}
                        cardImage1={cardImage1}
                        cardTitle1={cardTitle1}
                        cardId1={cardId1}
                        cardImage2={cardImage2}
                        cardTitle2={cardTitle2}
                        cardId2={cardId2}
                        cardImage3={cardImage3}
                        cardTitle3={cardTitle3}
                        cardId3={cardId3}
                    />
                )
            default:
                return (
                    <SaveFiveCardSpread 
                        readingId={id}
                        question={question} 
                        cardImage1={cardImage1}
                        cardTitle1={cardTitle1}
                        cardId1={cardId1}
                        cardImage2={cardImage2}
                        cardTitle2={cardTitle2}
                        cardId2={cardId2}
                        cardImage3={cardImage3}
                        cardTitle3={cardTitle3}
                        cardId3={cardId3}
                        cardImage4={cardImage4}
                        cardTitle4={cardTitle4}
                        cardId4={cardId4}
                        cardImage5={cardImage5}
                        cardTitle5={cardTitle5}
                        cardId5={cardId5}
                    />
                )
        }
    }
    onSubmit = (formValues) => {
        this.props.noteReading(this.props.match.params.id, formValues)
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
                <SideNote 
                    initialValues={_.pick(
                        this.props.reading,
                        'interpretation',
                        'retrospective'
                    )}
                    onSubmit={this.onSubmit}
                />
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
    { fetchReading, noteReading }
)(SaveReading)
// -------------------------------------------------