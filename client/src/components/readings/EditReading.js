import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading, editReading } from '../../actions'
import ReadingsForm from './ReadingsForm'
// -------------------------------------------------

class EditReading extends Component {
    componentDidMount () {
        this.props.fetchReading(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editReading(this.props.match.params.id, formValues)
    }
    render () {
        if (!this.props.reading) {
            return (
                <div className="progress">
                    <div className="indeterminate" />
                </div>
            )
        }
        return (
            <div className="row">
                <ReadingsForm 
                    initialValues={_.pick(
                        this.props.reading,
                        'question',
                        'spread'
                    )}
                    onSubmit={this.onSubmit}
                    header='Change your question or spread...'
                />
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state, ownProps) => {
    return { 
        reading: state.readings[ownProps.match.params.id] 
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReading, editReading }
)(EditReading)
// -------------------------------------------------