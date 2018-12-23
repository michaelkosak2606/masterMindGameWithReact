import React, { Component } from 'react'

export class Spielfiguren extends Component {
    render() {
        const spielFiguren = this.props.data.figuren.map((figurFarbe, index) => {
            return (
                <div
                    draggable
                    onDragStart={event => this.props.onDragStart(event, figurFarbe)}
                    key={index}
                    className="circleInside spielfiguren"
                    style={{ backgroundColor: `${figurFarbe}` }}
                >
                </div>
            )
        })

        return (
            <div className="spielfiguren">
                {spielFiguren}
            </div>
        )
    }
}

export default Spielfiguren
