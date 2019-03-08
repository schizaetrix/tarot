import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading } from '../../actions'
// -------------------------------------------------

class ViewReading extends Component {
    render () {
        return (
            <div>
                ViewReading
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