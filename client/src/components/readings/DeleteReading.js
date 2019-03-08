import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading, deleteReading } from '../../actions'
// -------------------------------------------------

class DeleteReading extends Component {
    render () {
        return (
            <div>
                DeleteReading
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