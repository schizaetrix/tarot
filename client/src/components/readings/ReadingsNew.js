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
                            width: '100px'
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
                            height: '150px',
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
                            width: '50px'
                        }}
                    />
                )
        }
    }
    renderAdminBtns (reading) {
        return (
            <div className="row">
                <Link to={`/readings/edit/${reading.id}`}>
                    <i className="
                        material-icons small
                        purple-text text-darken-3"
                    >
                        edit
                    </i>
                </Link>
                <Link to={`/readings/delete/${reading.id}`}>
                    <i className="
                        material-icons small
                        purple-text text-darken-3"
                    >
                        delete
                    </i>
                </Link>
            </div>
        )
    }
    renderReadingCards () {
        const readingsArr = this.props.readings
        return readingsArr.slice(Math.max(readingsArr.length - 3, 0)).reverse().map(
            (reading) => {
                if (reading.userId === this.props.currentUserId) {
                    return (
                        <div className="col s4" key={reading.id}>
                            <div className="card small reading-card-background">
                                <div className="card-image">
                                    {this.renderReadingSpread(reading)}
                                </div>
                                <Link 
                                    to={`/readings/save/${reading.id}`}
                                    className="card-title white-text left-align"
                                >
                                    <h6>{reading.question}</h6>
                                </Link>
                                {this.renderAdminBtns(reading)}
                            </div>
                        </div>
                    )
                } else { return [] }
            }
        )
    }
    render () {
        return (
            <div className="row container white-text">
                <div 
                    style={{
                        marginTop: '30px',
                        marginBottom: '10px',
                        textAlign: 'left'
                    }}
                >
                    <h5>
                        Recent Readings...
                    </h5>
                </div>
                {this.renderReadingCards()}
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return { 
        readings: Object.values(state.readings),
        currentUserId: state.auth.userId
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReadings }
)(ReadingsNew)