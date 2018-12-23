import React, { Component } from 'react'
import Button from './Button'

export class GameRow extends Component {
    render() {
        const spielFelder = this.props.data.colors.map((colorInside, index) => {
            return (
                <div
                    className="gameCircle"
                    key={colorInside.id}
                >
                    <div
                        onDragOver={event => this.props.onDragOver(event)}
                        onDrop={event => this.props.onDrop(event, index)}
                        className="circleInside"
                        style={{ backgroundColor: `${colorInside.color}` }}
                    >
                    </div>
                </div>
            )
        })

        return (
            <div className={`gameRow ${this.props.clickable}`}>
                <div className="hits">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                {spielFelder}
                <Button text="Try it!!" />
            </div>
        )
    }
}

export default GameRow
