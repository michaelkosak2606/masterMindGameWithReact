import React from 'react'

const GameEndMessage = ({ gameEnded, gameEndMessage }) => {
    const opacity = gameEnded ? "1" : "0"
    const messageDelivered = gameEndMessage === "Text" ? "" : "game-end-message"

    return (
        <div className={messageDelivered} style={{ opacity: opacity }}>
            <h1> {gameEndMessage} </h1>
        </div>
    )
}

export default GameEndMessage
