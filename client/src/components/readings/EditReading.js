import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading, editReading } from '../../actions'
// -------------------------------------------------

class EditReading extends Component {
    render () {
        return (
            <div>
                EditReading
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { fetchReading, editReading }
)(EditReading)
// -------------------------------------------------