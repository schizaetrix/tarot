import React, { Component } from 'react'
// -------------------------------------------------
import CardSaved from '../CardSaved'
// -------------------------------------------------

class SaveThreeCardSpread extends Component {
    render () {
        return (
            <div className="row background-image">
                <div className="content-background">
                    <h4 className="white-text">
                        {this.props.question}
                    </h4>
                    <div className="row">
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage1}
                                cardTitle={this.props.cardTitle1}
                                cardId={this.props.cardId1}
                            />
                        </div>
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage2}
                                cardTitle={this.props.cardTitle2}
                                cardId={this.props.cardId2}
                            />
                        </div>
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '350px',
                                    width: '210px',
                                    fontSize: '20px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage3}
                                cardTitle={this.props.cardTitle3}
                                cardId={this.props.cardId3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default SaveThreeCardSpread
// -------------------------------------------------