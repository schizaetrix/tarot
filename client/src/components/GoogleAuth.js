import React, { Component } from 'react'

import keys from '../config/keys'


class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: keys.googleClientID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton () {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth