import React from 'react'
import GameRow from './GameRow'
import { CSSTransitionGroup } from 'react-transition-group'


const GameRows = ({ gamerows, turn, onDragOver, onDrop, onDragOut, nextRound }) => {
    const data = gamerows
    const gameRows = data.map((row, index) => {
        const checkTurnNumber = turn === index
        return (
            <GameRow
                key={index}
                onDragOver={onDragOver}
                onDrop={onDrop}
                colors={data[index].colors}
                clickable={row.status}
                nextRound={nextRound}
                checkTurnNumber={checkTurnNumber}
                turn={turn}
                guessedColors={data[index].guessedColors}
                onDragOut={onDragOut}
                opacity={index}
            />
        )
    })
    return (
        <CSSTransitionGroup
            transitionName="fade-rows"
            transitionAppear={true}
            transitionAppearTimeOut={500}
        >
            <div className="game-rows">
                {gameRows}
            </div>
        </CSSTransitionGroup>
    )
}


export default GameRows
