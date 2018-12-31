import React from 'react'

const InfoBoard = props => {
    return (
        <div className="info-board">
            <h1>Master Mind </h1>
            <div className="info-board-button" onClick={props.newGame}> new game</div>
            <div className="info-board-button" onClick={props.giveUp}>give up</div>
        </div>
    )
}


export default InfoBoard
