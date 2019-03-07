import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import M from 'materialize-css'


class CreateReading extends Component {
    componentDidMount () {
        M.AutoInit() // initializes materialize-css elements
    }
    renderInput ({ input, label }) {
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
            </div>
        )
    }
    renderSelect ({ input, label }) {
        // ^deconstructed formProps
        return (
            <div className="input-field col s12 white-text">
                <select
                    className="white-text"
                    placeholder={label}
                    { ...input } 
                >
                    <option value="defaultValue">
                        {label}
                    </option>
                    <option value="1">One Card Spread</option>
                    <option value="2">Three Card Spread</option>
                    <option value="3">Five Card Spread</option>
                </select>
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log(formValues)
    }
    render () {
        return (
            <div 
                className="row"
                id="background-image"
            >
                <div id="content-background">
                    <h3 className="white-text">
                        Ask your question below...
                    </h3>
                    <form 
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
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'createReading'
})(CreateReading)