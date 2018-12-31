import React, { Component } from 'react'
import GameRow from './GameRow'


export class Gamerows extends Component {
    render() {
        const data = this.props.gamerows
        const gameRows = data.map((row, index) => {
            const checkTurnNumber = this.props.turn === index
            return (
                <GameRow
                    key={index}
                    onDragOver={this.props.onDragOver}
                    onDrop={this.props.onDrop}
                    colors={data[index].colors}
                    clickable={row.status}
                    nextRound={this.props.nextRound}
                    checkTurnNumber={checkTurnNumber}
                    turn={this.props.turn}
                    guessedColors={data[index].guessedColors}
                    onDragOut={this.props.onDragOut}
                    opacity={index}
                />
            )
        })
        return (
            <div className="game-rows">
                {gameRows}
            </div>
        )
    }
}

export default Gamerows
