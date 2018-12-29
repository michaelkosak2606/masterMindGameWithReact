import React, { Component } from 'react'

export class HiddenColors extends Component {
    render() {
        const gameEndMessage = this.props.gameEndMessage === "Text" ? "" : "game-end-message"
        const opacity = this.props.gameEnded ? "1" : "0"
        const hiddenColorsRow = this.props.hiddenColors.map((hiddenColor, index) => {
            return (
                <div
                    className="gameCircle"
                    key={index}
                >
                    <div
                        className="circleInside"
                        style={{ backgroundColor: `${hiddenColor}` }}
                    >
                    </div>
                </div>
            )
        })
        return (
            <div className="hiddenColorsContainer">
                <h1 style={{ opacity: opacity }} className={gameEndMessage}>{this.props.gameEndMessage}</h1>
                <div className="hiddenColors hiddenColors-moz" style={{ opacity: this.props.opacity }}>
                    {hiddenColorsRow}
                </div>
                <div className={"hiddenColorsBoard  hiddenColorsBoard-moz " + this.props.slideOut}>
                    <h1 >
                        {this.props.loadingMessage}
                    </h1>
                </div>
            </div>
        )
    }
}

export default HiddenColors
