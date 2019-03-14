import React from 'react'
import ReactDOM from 'react-dom'
// -------------------------------------------------

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="modal" 
            id={props.id}
        >
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
            <div className="modal-footer" style={{ paddingRight: '15px' }}>
                {props.actions}
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

// -------------------------------------------------
export default Modal
// -------------------------------------------------