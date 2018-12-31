import React, { Component } from 'react'

export class GameEndMessage extends Component {
    render() {
        const opacity = this.props.gameEnded ? "1" : "0"
        const gameEndMessage = this.props.gameEndMessage === "Text" ? "" : "game-end-message"


        return (
            <div className={gameEndMessage} style={{ opacity: opacity }}>
                <h1> {this.props.gameEndMessage} </h1>
            </div>
        )
    }
}

export default GameEndMessage
