import React from 'react'

const SideBoard = props => {

    const gamePieces = props.data.gamePieces.map((color, index) => {
        return (
            <div
                className="circle-inside game-pieces"
                draggable
                onDragStart={event => props.onDragStart(event, color)}
                key={index}
                style={{ backgroundColor: `${color}` }}
            >
            </div>
        )
    })

    return (
        <div className="side-board">
            {gamePieces}
        </div>
    )
}


export default SideBoard
