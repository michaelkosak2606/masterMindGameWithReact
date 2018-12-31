import React from 'react'

const button = props => {
    return (
        <div>
            <button
                className="next-round-button"
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    )
}

export default button
