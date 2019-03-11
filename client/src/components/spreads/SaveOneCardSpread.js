import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
// import { saveReading } from '../../actions'
import CardSaved from '../CardSaved'
// -------------------------------------------------

class SaveOneCardSpread extends Component {
    // onClickSave = () => {
    //     const state = this.state
    //     const id = this.props.readingId
    //     this.props.saveReading(id, state)
    // }
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
                    />
                </div>
                {/* <button 
                    className="                        
                        btn-floating btn-large 
                        purple darken-3"
                    onClick={this.onClickSave}
                    id="save-btn"
                >
                    <i className="large material-icons">
                        save
                    </i>
                </button> */}
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