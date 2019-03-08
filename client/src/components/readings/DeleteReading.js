import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading, deleteReading } from '../../actions'
// -------------------------------------------------

class DeleteReading extends Component {
    render () {
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        DeleteReading
                    </h2>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { fetchReading, deleteReading }
)(DeleteReading)
// -------------------------------------------------