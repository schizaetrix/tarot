import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import Modal from './Modal'
import GoogleAuth from './GoogleAuth'
import ReadingsNew from './readings/ReadingsNew'
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
                        btn-large purple darken-3 
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
    renderCardsSearchBtn () {
        if (this.props.isSignedIn) {
            return (
                <Link
                    to='/cards'
                    className="
                        waves-effect waves-light 
                        btn purple darken-3"
                >
                    Search the Cards
                </Link>
            )
        }
    }
    renderReadingsListBtn () {
        if (this.props.isSignedIn) {
            return (
                <Link
                    to='/readings'
                    className="
                        waves-effect waves-light 
                        btn purple darken-3"
                >
                    See All Readings
                </Link>
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
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="col">
                            {this.renderCardsSearchBtn()}
                        </div>
                        <div className="col">
                            {this.renderReadingRoomBtn()}
                        </div>
                        <div className="col">
                            {this.renderReadingsListBtn()}
                        </div>
                    </div>
                    <ReadingsNew />
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