import React from 'react'
import Button from './Button'

const GameRow = props => {
    const colorFields = props.colors.map(colorField => {
        return (
            <div
                className="game-circle"
                key={colorField.id}
            >
                <div
                    draggable
                    onDragOver={event => props.onDragOver(event)}
                    onDrop={event => props.onDrop(event, colorField.id)}
                    onDragStart={event => props.onDragOut(event, colorField.id, colorField.color)}
                    className="circle-inside"
                    style={{ backgroundColor: `${colorField.color}` }}
                >
                </div>
            </div>
        )
    })

    const opacity = props.opacity === props.turn ? "1" : "0"
    const rightArrowAndTurn =
        <div className="right-arrow-container" style={{ opacity: opacity }}>
            <h2>Turn {props.turn + 1}</h2>
            <div className="arrow-right"></div>
        </div>
    return (
        <div className={`game-row  game-row-moz ${props.clickable}`}>

            {rightArrowAndTurn}
            <div className="hits">
                <div
                    className="square"
                    style={{ backgroundColor: `${props.guessedColors[0]}` }}
                ></div>
                <div
                    className="square"
                    style={{ backgroundColor: `${props.guessedColors[1]}` }}
                ></div>
                <div
                    className="square"
                    style={{ backgroundColor: `${props.guessedColors[2]}` }}
                ></div>
                <div
                    className="square"
                    style={{ backgroundColor: `${props.guessedColors[3]}` }}
                ></div>

            </div>
            {colorFields}
            <Button
                text="TRY IT!!"
                onClick={props.nextRound}
            />
        </div>
    )
}


export default GameRow


