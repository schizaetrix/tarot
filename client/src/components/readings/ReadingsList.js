import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReadings } from '../../actions'
// -------------------------------------------------

class ReadingsList extends Component {
    componentDidMount () {
        this.props.fetchReadings()
    }
    renderList () {
        return this.props.readings.map((reading) => {
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
                    <span className="question">
                        {reading.question}
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
                </li>
            )
        })
    }
    render () {
        console.log(this.props.readings)
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        Readings
                    </h2>
                    <ul className="collection col s12">
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return { readings: Object.values(state.readings) }
    // Object.values() takes state object from
    // redux store and converts it into an array
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReadings }
)(ReadingsList)
// -------------------------------------------------