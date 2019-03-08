import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// -------------------------------------------------

class Landing extends Component {
    renderReadingsButton () {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link
                        to='/readings'
                        className="
                            waves-effect 
                            waves-light 
                            btn
                            purple darken-3
                        "
                    >
                        See Your Past Readings
                    </Link>
                </div>
            )
        }
    }
    render () {
        return (
            <div 
                className="row"
                id="background-image-landing"
            >
                <div id="landing-content">
                    <h2 className="white-text">
                        Do you have a burning question?
                    </h2>
                    <Link
                        to="/readings/new"
                        className="
                            btn
                            purple darken-3
                            waves-effect 
                            waves-light 
                        "
                        style={{ marginTop: 10 }}
                    >
                        Step into the Reading Room
                    </Link>
                    <div style={{ marginTop: 20 }}>
                        {this.renderReadingsButton()}
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(Landing)
// -------------------------------------------------