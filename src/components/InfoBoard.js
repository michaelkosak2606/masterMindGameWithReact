import React from 'react'

const InfoBoard = ({ newGame, giveUp }) => {
    return (
        <div className="info-board">
            <h1>Master Mind </h1>
            <div className="info-board-button" onClick={newGame}> new game</div>
            <div className="info-board-button" onClick={giveUp}>give up</div>
        </div>
    )
}


export default InfoBoard
