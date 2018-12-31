import React from 'react'

const GameEndMessage = props => {
    const opacity = props.gameEnded ? "1" : "0"
    const gameEndMessage = props.gameEndMessage === "Text" ? "" : "game-end-message"

    return (
        <div className={gameEndMessage} style={{ opacity: opacity }}>
            <h1> {props.gameEndMessage} </h1>
        </div>
    )
}

export default GameEndMessage
