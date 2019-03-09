import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------

class ActionMenu extends Component {
    componentDidMount () {
        let fab = document.querySelectorAll('.fixed-action-btn')
        let options = {
            direction: 'bottom'
        }
        M.FloatingActionButton.init(fab, options)
        let optionsTooltip = document.getElementById('options')
        let backTooltip = document.getElementById('back')
        let noteTooltip = document.getElementById('note')
        let editTooltip = document.getElementById('edit')
        M.Tooltip.init(optionsTooltip, {})
        M.Tooltip.init(noteTooltip, {})
        M.Tooltip.init(backTooltip, {})
        M.Tooltip.init(editTooltip, {})
    }
    render () {
        return (
            <div className="fixed-action-btn">
                <a 
                    className="
                        btn-floating btn-large 
                        purple darken-3
                        tooltipped"
                    data-position="right"
                    data-tooltip="Options"
                    id="options"
                >
                    <i className="large material-icons">
                        menu
                    </i>
                </a>
                <ul>
                    <li>
                        <a 
                            className="
                                btn-floating grey 
                                darken-3 tooltipped"
                            data-position="right"
                            data-tooltip="Edit Reading"
                            id="edit"
                        >
                            <i className="material-icons">
                                edit
                            </i>
                        </a>
                    </li>
                    <li>
                        <a 
                            className="
                                btn-floating grey 
                                darken-3 tooltipped"
                            data-position="right"
                            data-tooltip="Reading Notes"
                            id="note"
                        >
                            <i className="material-icons">
                                format_quote
                            </i>
                        </a>
                    </li>
                    <li>
                        <Link 
                            className="
                                btn-floating grey 
                                darken-3 tooltipped"
                            data-position="right"
                            data-tooltip="Readings List"
                            id="back"
                            to="/readings"
                        >
                            <i className="material-icons">
                                navigate_before
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

// -------------------------------------------------
export default ActionMenu
// -------------------------------------------------