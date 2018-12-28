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
                        {index}
                    </div>
                </div>
            )
        })
        return (
            <div className="hiddenColorsContainer">
                <h1>{this.props.message}</h1>
                <div className={"hiddenColors"} style={{ opacity: this.props.opacity }}>
                    {hiddenColorsRow}
                </div>
                <div className={"hiddenColorsBoard " + this.props.slideOut}>
                    <h1>
                        GOOD LUCK!
                    </h1>
                </div>
            </div>
        )
    }
}

export default HiddenColors
