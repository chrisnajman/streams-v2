import React from "react"
import ReactDOM from 'react-dom'



const ModalPortal = ({ title, content, actions, onDismiss }) => {

    return ReactDOM.createPortal(
        <div
            onClick={onDismiss}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <header className="header">
                    <h1>{title}</h1>
                </header>
                <p className="content">
                    {content}
                </p>

                {/* Buttons go here: */}
                <div className="actions">
                    {actions}
                </div>

            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default ModalPortal

/**
 * This is a Portal
 * See Stream/StreamDelete.js for embedded example.
 */
