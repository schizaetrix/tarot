import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------

class ReadingsForm extends Component {
    componentDidMount () {
        M.AutoInit() // initializes materialize-css elements
    }
    renderError ({ error, touched }) {
        if ( touched && error) {
            return (
                <div className="ui error message">
                    <div className="header red-text">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        // ^deconstructed formProps
        return (
            <div className="field input-field col s12">
                <input
                    autoComplete="off" 
                    className="white-text"
                    type="text"
                    placeholder={label}
                    { ...input }
                />
                {this.renderError(meta)}
            </div>
        )
    }
    renderSelect = ({ input, label, meta }) => {
        // ^deconstructed formProps
        return (
            <div className="input-field col s12">
                <select
                    { ...input } 
                >
                    <option value="" disabled>
                        {label}
                    </option>
                    <option value="One Card Spread">One Card Spread</option>
                    <option value="Three Card Spread">Three Card Spread</option>
                    <option value="Five Card Spread">Five Card Spread</option>
                </select>
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    render () {
        return (
            <div 
                className="row"
                id="background-image"
            >
                <div id="content-background">
                    <h3 className="white-text">
                        {this.props.header}
                    </h3>
                    <form 
                        className="ui form error"
                        autoComplete="off"
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                    >
                        <Field 
                            name="question"
                            label="What would you like to ask the cards?"
                            component={this.renderInput}
                        />
                        <Field 
                            name="spread"
                            label="Choose a card spread"
                            component={this.renderSelect}
                        />
                        <button 
                            type="submit"
                            className="
                                btn
                                purple darken-3
                                waves-effect 
                                waves-light 
                            "
                            style={{ marginLeft: '10px' }}
                        >
                            Submit
                        </button>
                        <Link 
                            to="/readings"
                            className="
                                btn
                                purple darken-3
                                waves-effect 
                                waves-light 
                            "
                            style={{ marginLeft: '10px' }}
                        >
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const validate = (formValues) => {
    const errors = {}
    if (!formValues.question) {
        errors.question = 'You must enter a question'
    }
    if (!formValues.spread) {
        errors.spread = 'You must choose a spread'
    }
    return errors
}
// -------------------------------------------------
export default reduxForm({
    form: 'readingsForm',
    validate
})(ReadingsForm)
// -------------------------------------------------
