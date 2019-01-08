import React from 'react'
import Button from './Button'

const GameRow =
    ({ colors, onDragOver, onDrop, onDragOut, opacity, turn, guessedColors, clickable, nextRound }) => {
        const colorFields = colors.map(colorField => {
            return (
                <div
                    className="game-circle"
                    key={colorField.id}
                >
                    <div
                        draggable
                        onDragOver={event => onDragOver(event)}
                        onDrop={event => onDrop(event, colorField.id)}
                        onDragStart={event => onDragOut(event, colorField.id, colorField.color)}
                        className="circle-inside"
                        style={{ backgroundColor: `${colorField.color}` }}
                    >
                    </div>
                </div>
            )
        })

        const opacityNew = opacity === turn ? "1" : "0"
        const rightArrowAndTurn =
            <div className="right-arrow-container" style={{ opacity: opacityNew }}>
                <h2>Turn {turn + 1}</h2>
                <div className="arrow-right"></div>
            </div>
        return (
            <div className={`game-row  game-row-moz ${clickable}`}>

                {rightArrowAndTurn}
                <div className="hits">
                    <div
                        className="square"
                        style={{ backgroundColor: `${guessedColors[0]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${guessedColors[1]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${guessedColors[2]}` }}
                    ></div>
                    <div
                        className="square"
                        style={{ backgroundColor: `${guessedColors[3]}` }}
                    ></div>

                </div>
                {colorFields}
                <Button
                    text="TRY IT!!"
                    onClick={nextRound}
                />
            </div>
        )
    }


export default GameRow


