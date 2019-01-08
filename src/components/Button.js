import React from 'react'

const button = ({ onClick, text }) => {
    return (
        <div>
            <button
                className="next-round-button"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default button
