import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import history from '../history'
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
                {/* eslint-disable-next-line */}
                <a 
                    className="
                        btn-floating btn-large 
                        waves-effect waves-light
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
                        <button 
                            className="
                                btn-floating grey 
                                waves-effect waves-light
                                darken-3 tooltipped"
                            data-position="right"
                            data-tooltip="New Reading"
                            id="back"
                            onClick={() => history.push('/readings/new')}
                        >
                            <i className="material-icons">
                                add
                            </i>
                        </button>
                    </li>
                    <li>
                        <Link 
                            className="
                                btn-floating grey 
                                waves-effect waves-light
                                darken-3 tooltipped"
                            data-position="right"
                            data-tooltip="Edit Reading"
                            id="edit"
                            to={`/readings/edit/${this.props.reading}`}
                        >
                            <i className="material-icons">
                                edit
                            </i>
                        </Link>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a 
                            className="
                                btn-floating grey 
                                waves-effect waves-light
                                darken-3 tooltipped
                                sidenav-trigger"
                            data-target="slide-out"
                            data-position="right"
                            data-tooltip="Reading Notes"
                            id="note"
                        >
                            <i className="material-icons">
                                format_quote
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

// -------------------------------------------------
export default ActionMenu
// -------------------------------------------------