import React, { Component } from 'react'
import M from 'materialize-css'
// -------------------------------------------------

class BackButton extends Component {
    componentDidMount () {
        let backTooltip = document.getElementById('back')
        M.Tooltip.init(backTooltip, {})
    }
    render () {
        return (
            <button 
                className="
                    btn-floating btn-large 
                    waves-effect waves-light
                    purple darken-3
                    fixed-action-btn 
                    tooltipped"
                data-position="right"
                data-tooltip="Previous Page"
                id="back"
                onClick={() => window.history.back()}
            >
                <i className="material-icons">
                    arrow_back
                </i>
            </button>
        )
    }
}

// -------------------------------------------------
export default BackButton
// -------------------------------------------------