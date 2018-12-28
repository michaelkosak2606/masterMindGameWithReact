import React, { Component } from 'react'

export class InfoBoard extends Component {
    render() {
        return (
            <div className="infoBoard">
                <h2> Turn {this.props.turnNumber + 1}</h2>
                <h1>Master Mind </h1>
                <button className="infoBoardButton" onClick={this.props.newGame}> New Game</button>
                <button className="infoBoardButton" onClick={this.props.gameEnd}>Give up</button>
            </div>
        )
    }
}

export default InfoBoard
