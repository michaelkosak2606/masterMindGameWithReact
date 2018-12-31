import React from 'react'
import GameRow from './GameRow'
import { CSSTransitionGroup } from 'react-transition-group'


const GameRows = props => {
    const data = props.gamerows
    const gameRows = data.map((row, index) => {
        const checkTurnNumber = props.turn === index
        return (
            <GameRow
                key={index}
                onDragOver={props.onDragOver}
                onDrop={props.onDrop}
                colors={data[index].colors}
                clickable={row.status}
                nextRound={props.nextRound}
                checkTurnNumber={checkTurnNumber}
                turn={props.turn}
                guessedColors={data[index].guessedColors}
                onDragOut={props.onDragOut}
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
