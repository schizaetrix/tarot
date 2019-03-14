import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import M from 'materialize-css'

// -------------------------------------------------

class SideNote extends Component {
    componentDidMount () {
        M.AutoInit()
    }
    renderInterpretation = ({ input }) => {
        return (
            <li 
                className="input-field"
                type="text"
                style={{ 
                    margin: 20,
                    width: '85%'
                }}
            >
                <h5 style={{ paddingTop: 40 }}>
                    Interpretation:
                </h5>
                <textarea 
                    className="materialize-textarea"
                    autoComplete="off"
                    { ...input }
                />
            </li>
        )
    }
    renderRetrospective = ({ input }) => {
        return (
            <li 
                className="input-field"
                type="text"
                style={{ 
                    margin: 20,
                    width: '85%'
                }}
            >
                <h5>
                    Retrospective:
                </h5>
                <textarea 
                    className="materialize-textarea"
                    autoComplete="off"
                    { ...input }
                />
            </li>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
        M.toast({
            html: 'Your notes have been saved!'
        })
    }
    render () {
        return (
            <form
                className="form"
                autoComplete="off"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <ul 
                    id="slide-out" 
                    className="sidenav white-text"
                    style={{ 
                        backgroundColor: '#424242',
                    }}
                >
                    <Field 
                        name="interpretation"
                        component={this.renderInterpretation}
                    />
                    <Field 
                        name="retrospective"
                        component={this.renderRetrospective}
                    />
                    <button 
                        type="submit"
                        className="
                            btn
                            purple darken-3
                            waves-effect 
                            waves-light 
                        "
                        style={{ marginLeft: '20px' }}
                    >
                        Save Notes
                    </button>
                </ul>
            </form>
        )
    }
}

// -------------------------------------------------
export default reduxForm({
    form: 'notesForm'
})(SideNote)
// -------------------------------------------------