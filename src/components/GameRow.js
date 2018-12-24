import React, { Component } from 'react'
import Button from './Button'

export class GameRow extends Component {
    render() {

        const spielFelder = this.props.data.map((spielFeld) => {

            return (
                <div
                    className="gameCircle"
                    key={spielFeld.id}
                >
                    <div
                        onDragOver={event => this.props.onDragOver(event)}
                        onDrop={event => this.props.onDrop(event, spielFeld.id)}
                        className="circleInside"
                        style={{ backgroundColor: `${spielFeld.color}` }}
                    >
                        {spielFeld.id}
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
                <Button
                    text="Try it!!"
                    onClick={this.props.nextRound}
                />
            </div>
        )
    }
}

export default GameRow
