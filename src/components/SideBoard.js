import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'


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
