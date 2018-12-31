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
            <div className="hidden-colors-container">
                <div className={"hidden-colors-board " + this.props.slideOut}>
                    <h1 >
                        {this.props.loadingMessage}
                    </h1>
                </div>
                <div className="hidden-colors" style={{ opacity: this.props.opacity }}>
                    {hiddenColorsRow}
                </div>
            </div>
        )
    }
}

export default HiddenColors
