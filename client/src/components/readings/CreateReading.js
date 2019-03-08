import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { createReading } from '../../actions'
import ReadingsForm from './ReadingsForm'
// -------------------------------------------------

class CreateReading extends Component {
    onSubmit = (formValues) => {
        this.props.createReading(formValues)
    }
    render () {
        return (
            <div className="row">
                <ReadingsForm 
                    onSubmit={this.onSubmit}
                    header='Ask your question below'
                />
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null,
    { createReading }
)(CreateReading)
// -------------------------------------------------