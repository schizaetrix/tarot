import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading } from '../../actions'
// -------------------------------------------------

class ViewReading extends Component {
    render () {
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        ViewReading
                    </h2>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { fetchReading }
)(ViewReading)
// -------------------------------------------------