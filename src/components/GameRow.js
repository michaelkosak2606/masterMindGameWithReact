import React, { Component } from 'react'
import Button from './Button'

export class GameRow extends Component {
    render() {
        const colorFields = this.props.data.map(colorField => {
            return (
                <div
                    className="gameCircle"
                    key={colorField.id}
                >
                    <div
                        onDragOver={event => this.props.onDragOver(event)}
                        onDrop={event => this.props.onDrop(event, colorField.id)}
                        className="circleInside"
                        style={{ backgroundColor: `${colorField.color}` }}
                    >
                    </div>
                </div>
            )
        })
        const turnNumber = this.props.checkTurnNumber ?
            <h2>Turn {this.props.turn + 1}</h2> : null

        const rightArrow = this.props.checkTurnNumber ?
            <div className="arrow-right"></div> : null

        return (
            <div className={`gameRow ${this.props.clickable}`}>
                {turnNumber}
                {rightArrow}
                <div className="hits">
                    <div
                        className="square"
                        style={{ backgroundColor: `${this.props.guessedColors[0]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${this.props.guessedColors[1]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${this.props.guessedColors[2]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${this.props.guessedColors[3]}` }}
                    ></div>

                </div>
                {colorFields}
                <Button
                    text="TRY IT!!"
                    onClick={this.props.nextRound}
                />
            </div>
        )
    }
}

export default GameRow


