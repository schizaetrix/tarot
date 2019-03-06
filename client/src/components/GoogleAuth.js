import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'
import keys from '../config/keys'


class GoogleAuth extends Component {
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: keys.googleClientID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId()) // action creator
        } else {
            this.props.signOut() // action creator
        }
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton () {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <a 
                    className="
                        waves-effect 
                        waves-light 
                        btn-small 
                        grey darken-3
                    "
                    onClick={this.onSignOutClick}
                >
                    <i className="material-icons left">
                        arrow_back
                    </i>
                    Sign Out
                </a>
            )
        } else {
            return (
                <a 
                    className="
                        waves-effect 
                        waves-light 
                        btn-small 
                        grey darken-3
                    "
                    onClick={this.onSignInClick}
                >
                    <i className="material-icons right">
                        arrow_forward
                    </i>
                    Sign In
                </a>
            )
        }
    } 
    render () {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(
    mapStateToProps, 
    { signIn, signOut }
)(GoogleAuth)