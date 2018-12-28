import React, { Component } from 'react'

export class HiddenColors extends Component {
    render() {
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
                <h1>{this.props.gameEndMessage}</h1>
                <div className={"hiddenColors"} style={{ opacity: this.props.opacity }}>
                    {hiddenColorsRow}
                </div>
                <div className={"hiddenColorsBoard " + this.props.slideOut}>
                    <h1>
                        {this.props.loadingMessage}
                    </h1>
                </div>
            </div>
        )
    }
}

export default HiddenColors
