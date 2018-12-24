import React, { Component } from 'react'

export class InfoBoard extends Component {
    render() {
        return (
            <div className="infoBoard">
                <h2> Turn {this.props.turnNumber + 1}</h2>
            </div>
        )
    }
}

export default InfoBoard
