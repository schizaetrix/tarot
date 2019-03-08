import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// -------------------------------------------------
import { fetchReadings } from '../../actions'
// -------------------------------------------------

class ReadingsList extends Component {
    componentDidMount () {
        this.props.fetchReadings()
    }
    renderAdmin () {
        return (
            <div className="secondary-content">
                <div>
                    <i className="material-icons white-text">
                        edit
                    </i>
                </div>
                <div>
                    <i className="material-icons white-text">
                        delete
                    </i>
                </div>
            </div>
        )
    }
    renderCreate () {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link
                    to='/readings/new'
                    className="
                        waves-effect 
                        waves-light 
                        btn
                        purple darken-3
                    "
                >
                    New Reading
                </Link>
            </div>
        )
    }
    renderList () {
        return this.props.readings.map((reading) => {
            if (reading.userId === this.props.currentUserId) {
                return (
                    <li 
                        className="collection-item avatar" 
                        key={reading.id}
                    >
                        <i 
                            className="
                                material-icons 
                                circle
                                purple darken-3
                            "
                        >
                            collections_bookmark
                        </i>
                        <span>
                            <h6 
                                className="question"
                                style={{ fontWeight: 'bold' }}
                            >
                                {reading.question}  
                            </h6>
                            <p className="spread">
                                <small>
                                    {reading.spread}
                                </small>
                            </p>
                            <p className="date">
                                <small>
                                    {reading.date}
                                </small>
                            </p>
                        </span>
                        {this.renderAdmin(reading)}
                    </li>
                )
            } 
        })
    }
    render () {
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        Readings
                    </h2>
                    <ul className="collection">
                        {this.renderList()}
                    </ul>
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return { 
        readings: Object.values(state.readings),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReadings }
)(ReadingsList)
// -------------------------------------------------