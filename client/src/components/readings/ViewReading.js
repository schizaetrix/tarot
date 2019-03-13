import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading } from '../../actions'
import OneCardSpread from '../spreads/OneCardSpread'
import ThreeCardSpread from '../spreads/ThreeCardSpread'
import FiveCardSpread from '../spreads/FiveCardSpread'
// -------------------------------------------------

class ViewReading extends Component {
    componentDidMount () {
        this.props.fetchReading(this.props.match.params.id)
    }
    renderSpread () {
        const { question, spread, id } = this.props.reading
        switch (spread) {
            case 'One Card Spread':
                return (
                    <OneCardSpread 
                        question={question}
                        readingId={id}
                    />
                )
            case 'Three Card Spread':
                return (
                    <ThreeCardSpread 
                        question={question}
                        readingId={id}
                    />
                )
            default:
                return (
                    <FiveCardSpread 
                        question={question} 
                        readingId={id}
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
)(ViewReading)
// -------------------------------------------------