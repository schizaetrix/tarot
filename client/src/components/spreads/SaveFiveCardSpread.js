import React, { Component } from 'react'
// -------------------------------------------------
import CardSaved from '../CardSaved'
import ActionMenu from '../ActionMenu'
// -------------------------------------------------

class SaveFiveCardSpread extends Component {
    render () {
        return (
            <div className="row background-image">
                <ActionMenu 
                    reading={this.props.readingId}
                />
                <div className="content-background">
                    <h4 className="white-text">
                        {this.props.question}
                    </h4>
                    <div className="row">
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage1}
                                cardTitle={this.props.cardTitle1}
                                cardId={this.props.cardId1}
                                cardTooltip={this.props.cardTooltip1}
                                tooltipPosition="left"
                            />
                        </div>
                        <div className="col">
                            <CardSaved
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage2}
                                cardTitle={this.props.cardTitle2}
                                cardId={this.props.cardId2}
                                cardTooltip={this.props.cardTooltip2}
                                tooltipPosition="left"
                            />
                        </div>
                        <div className="col">
                            <CardSaved
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage3}
                                cardTitle={this.props.cardTitle3}
                                cardId={this.props.cardId3}
                                cardTooltip={this.props.cardTooltip3}
                                tooltipPosition="right"

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage4}
                                cardTitle={this.props.cardTitle4}
                                cardId={this.props.cardId4}
                                cardTooltip={this.props.cardTooltip4}
                                tooltipPosition="left"
                            />
                        </div>
                        <div className="col">
                            <CardSaved 
                                style={{
                                    height: '290px',
                                    width: '170px',
                                    fontSize: '18px',
                                    color: 'black'
                                }}
                                cardImage={this.props.cardImage5}
                                cardTitle={this.props.cardTitle5}
                                cardId={this.props.cardId5}
                                cardTooltip={this.props.cardTooltip5}
                                tooltipPosition="right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }


// -------------------------------------------------
export default SaveFiveCardSpread
// -------------------------------------------------