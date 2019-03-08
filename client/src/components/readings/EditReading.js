import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading, editReading } from '../../actions'
// -------------------------------------------------

class EditReading extends Component {
    render () {
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        EditReading
                    </h2>
                </div>
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