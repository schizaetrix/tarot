import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// -------------------------------------------------
import { fetchReadings } from '../../actions'
import FiveCardThumb from '../spreads/FiveCardThumb'
import ThreeCardThumb from '../spreads/ThreeCardThumb'
import OneCardThumb from '../spreads/OneCardThumb'
// -------------------------------------------------

class ReadingsNew extends Component {
    componentDidMount () {
        this.props.fetchReadings()
    }
    renderReadingSpread (reading) {
        switch (reading.spread) {
            case 'One Card Spread':
                return (
                    <OneCardThumb 
                        cardImage1={reading.cardImage1}
                        cardTitle1={reading.cardTitle1}
                        style={{
                            height: '200px',
                            width: '110px'
                        }}
                    />
                )
            case 'Three Card Spread':
                return (
                    <ThreeCardThumb 
                        cardImage1={reading.cardImage1}
                        cardTitle1={reading.cardTitle1}
                        cardImage2={reading.cardImage2}
                        cardTitle2={reading.cardTitle2}
                        cardImage3={reading.cardImage3}
                        cardTitle3={reading.cardTitle3}
                        style={{
                            height: '130px',
                            width: '75px'
                        }}
                    />
                )
            default:
                return (
                    <FiveCardThumb 
                        cardImage1={reading.cardImage1}
                        cardTitle1={reading.cardTitle1}
                        cardImage2={reading.cardImage2}
                        cardTitle2={reading.cardTitle2}
                        cardImage3={reading.cardImage3}
                        cardTitle3={reading.cardTitle3}
                        cardImage4={reading.cardImage4}
                        cardTitle4={reading.cardTitle4}
                        cardImage5={reading.cardImage5}
                        cardTitle5={reading.cardTitle5}
                        style={{
                            height: '100px',
                            width: '55px'
                        }}
                    />
                )
        }
    }
    renderAdminBtns (reading) {
        return (
            <div className="row" style={{ position: 'relative' }}>
                <Link to={`/readings/edit/${reading.id}`}>
                    <i className="
                        material-icons
                        reading-card-edit
                        white-text"
                    >
                        edit
                    </i>
                </Link>
                <Link to={`/readings/delete/${reading.id}`}>
                    <i className="
                        material-icons
                        reading-card-delete
                        white-text"
                    >
                        delete
                    </i>
                </Link>
            </div>
        )
    }
    renderReadingCards () {
        const readingsArr = this.props.readings
        const userReadings = []
        readingsArr.forEach((reading) => {
            if (reading.userId === this.props.currentUserId) {
                userReadings.push(reading)
            }
        })
        return userReadings.slice(Math.max(userReadings.length - 3, 0)).reverse().map(
            (reading) => {
                return (
                    <div className="col s4" key={reading.id}>
                        {this.renderAdminBtns(reading)}
                        <Link to={`/readings/save/${reading.id}`}>
                            <div className="card small reading-card-background">
                                <div className="card-content">
                                    {this.renderReadingSpread(reading)}
                                </div>
                                <div 
                                    className="white-text left-align"
                                    style={{
                                        padding: '10px'
                                    }}
                                >
                                    {reading.question}
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        )
    }
    render () {
        const readingsObj = this.props.readingsObj
        const userReadings = {}
        for (var x in readingsObj) {
            if (readingsObj[x].userId === this.props.currentUserId) {
                userReadings[x] = readingsObj[x]
            }
        }
        if (this.props.isSignedIn && !_.isEmpty(userReadings)) {
            return (
                <div className="row container white-text">
                    <div 
                        style={{
                            marginTop: '25px',
                            marginBottom: '10px',
                            textAlign: 'left'
                        }}
                    >
                        <h5>
                            Recent Readings...
                        </h5>
                    </div>
                    {this.renderReadingCards()}
                    <div
                        style={{
                            marginTop: '50px',
                            textAlign: 'right'
                        }}
                    >
                        <h6>
                            ... click 
                            <Link 
                                to="/readings"
                                className="
                                    btn-small
                                    purple darken-3"
                                style={{ margin: '5px' }}
                            >
                                HERE
                            </Link> 
                            for more readings!
                        </h6>
                    </div>
                </div>
            )
        } else { return null }
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return { 
        readings: Object.values(state.readings),
        readingsObj: state.readings,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReadings }
)(ReadingsNew)