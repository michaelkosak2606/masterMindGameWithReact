import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'


const SideBoard = ({ data, onDragStart }) => {

    const gamePieces = data.gamePieces.map((color, index) => {
        return (
            <div
                className="circle-inside game-pieces"
                draggable
                onDragStart={event => onDragStart(event, color)}
                key={index}
                style={{ backgroundColor: `${color}` }}
            >
            </div>
        )
    })

    return (
        <CSSTransitionGroup
            className="side-board"
            transitionName="fade-rows"
            transitionAppear={true}
            transitionAppearTimeOut={500}
        >
            <div>
                {gamePieces}
            </div>
        </CSSTransitionGroup>
    )
}


export default SideBoard
