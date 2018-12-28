import React, { Component } from 'react'

export class InfoBoard extends Component {
    render() {
        return (
            <div className="infoBoard">
                <h1>Master Mind </h1>
                <div className="infoBoardButton" onClick={this.props.newGame}> New Game</div>
                <div className="infoBoardButton" onClick={this.props.gameEnd}>Give up</div>
            </div>
        )
    }
}

export default InfoBoard
