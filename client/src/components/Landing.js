import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import Modal from './Modal'
import GoogleAuth from './GoogleAuth';
// -------------------------------------------------

class Landing extends Component {
    componentDidMount () {
        M.AutoInit()
    }
    renderReadingRoomBtn () {
        if (!this.props.isSignedIn) {
            return (
                <a 
                    className="
                        waves-effect waves-light 
                        btn purple darken-3 
                        modal-trigger"
                    href="#signin"
                    style={{ marginTop: 10 }}
                >
                    Step into the Reading Room
                    <Modal 
                        id="signin"
                        title="You are not signed in!"
                        content="Please sign in before entering the Reading Room"
                        actions={this.renderGoogleAuth()}
                    />
                </a>
            )
        } else {
            return (
                <Link
                    to="/readings/new"
                    className="
                        btn purple darken-3
                        waves-effect waves-light"
                    style={{ marginTop: 10 }}
                >
                    Step into the Reading Room
                </Link>
            )
        }
    }
    renderGoogleAuth () {
        return (
            <div className="modal-close">
                <GoogleAuth />
            </div>
        )
    }
    renderReadingsListBtn () {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link
                        to='/readings'
                        className="
                            waves-effect waves-light 
                            btn purple darken-3"
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
                    <div>
                        {this.renderReadingRoomBtn()}
                    </div>
                    <div style={{ marginTop: 20 }}>
                        {this.renderReadingsListBtn()}
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