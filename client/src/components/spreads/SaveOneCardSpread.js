import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
// import { saveReading } from '../../actions'
import CardSaved from '../CardSaved'
// -------------------------------------------------

class SaveOneCardSpread extends Component {
    render () {
        return (
            <div className="row background-image">
                <div className="content-background">
                    <h4 className="white-text">
                        {this.props.question}
                    </h4>
                    <CardSaved 
                        style={{ 
                            height: '500px',
                            width: '300px',
                            fontSize: '30px',
                            color: 'black'
                        }}
                        cardImage={this.props.cardImage1}
                        cardTitle={this.props.cardTitle1}
                        cardId={this.props.cardId1}
                        cardTooltip={this.props.cardTooltip1}
                        tooltipPosition="left"
                    />
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    // { saveReading }
)(SaveOneCardSpread)
// -------------------------------------------------