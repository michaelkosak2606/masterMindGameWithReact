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
        const turnNumber = this.props.checkTurnNumber ?
            <h2>Turn {this.props.turn + 1}</h2> : null

        const rightArrow = this.props.checkTurnNumber ?
            <div class="arrow-right"></div> : null

        return (
            <div className={`gameRow ${this.props.clickable}`}>
                {turnNumber}
                {rightArrow}
                <div className="hits">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                {spielFelder}
                <Button
                    text="TRY IT!!"
                    onClick={this.props.nextRound}
                />
            </div>
        )
    }
}

export default GameRow
