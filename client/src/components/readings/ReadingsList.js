import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// -------------------------------------------------
import { fetchReadings } from '../../actions'
import BackButton from '../BackButton'
// -------------------------------------------------

class ReadingsList extends Component {
    componentDidMount () {
        this.props.fetchReadings()
    }
    renderAdmin (reading) {
        return (
            <div className="secondary-content">
                <div>
                    <Link
                        to={`/readings/edit/${reading.id}`}
                    >
                        <i className="
                            material-icons 
                            list-edit
                            white-text"
                        >
                            edit
                        </i>
                    </Link>
                </div>
                <div>
                    <Link
                        to={`/readings/delete/${reading.id}`}
                    >
                        <i className="
                            material-icons 
                            list-delete
                            white-text"
                        >
                            delete
                        </i>
                    </Link>
                </div>
            </div>
        )
    }
    renderCreate () {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link
                        to='/readings/new'
                        className="
                            waves-effect waves-light 
                            btn purple darken-3"
                        style={{ margin: '10px' }}
                    >
                        New Reading
                    </Link>
                </div>
            )
        }
    }
    renderIcon (reading) {
        switch (reading.spread) {
            case 'One Card Spread':
                return <i className="material-icons circle purple darken-3">filter_1</i>
            case 'Three Card Spread':
                return <i className="material-icons circle purple darken-3">filter_3</i>
            default:
                return <i className="material-icons circle purple darken-3">filter_5</i>
        }
    }
    renderList () {
        return this.props.readings.reverse().map((reading) => {
            if (reading.userId === this.props.currentUserId) {
                return (
                    <li 
                        className="collection-item avatar" 
                        key={reading.id}
                    >
                        {this.renderIcon(reading)}
                        <span>
                            <Link 
                                to={`/readings/save/${reading.id}`}
                                className="question header"
                                style={{ 
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}
                            >
                                {reading.question}  
                            </Link>
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
            } else {
                return []
            }
        })
    }
    render () {
        return (
            <div className="background-image">
                <BackButton />
                <div className="content-background">
                    <h2 className="white-text">
                        Readings
                    </h2>
                    <ul 
                        className="collection"
                        style={{ 
                            overflow: 'auto',
                            maxHeight: '60%'
                        }}    
                    >
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