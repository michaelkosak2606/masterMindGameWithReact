import React, { Component } from 'react'
import Button from './Button'

export class GameRow extends Component {
    render() {
        const colorFields = this.props.colors.map(colorField => {
            return (
                <div
                    className="gameCircle"
                    key={colorField.id}
                >
                    <div
                        draggable
                        onDragOver={event => this.props.onDragOver(event)}
                        onDrop={event => this.props.onDrop(event, colorField.id)}
                        onDragStart={event => this.props.onDragOut(event, colorField.id, colorField.color)}
                        className="circleInside"
                        style={{ backgroundColor: `${colorField.color}` }}
                    >
                    </div>
                </div>
            )
        })

        const opacity = this.props.opacity === this.props.turn ? "1" : "0"
        const rightArrowAndTurn =
            <div className="right-arrow-container" style={{ opacity: opacity }}>
                <h2>Turn {this.props.turn + 1}</h2>
                <div className="arrow-right"></div>
            </div>
        return (
            <div className={`game-row  game-row-moz ${this.props.clickable}`}>

                {rightArrowAndTurn}
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


