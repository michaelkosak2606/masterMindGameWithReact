import React, { Component } from 'react'

export class HiddenColors extends Component {
    render() {
        const hiddenColors = this.props.hiddenColors.map((hiddenColor, index) => {
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
            <div className="hiddenColors">
                {hiddenColors}
            </div>
        )
    }
}

export default HiddenColors
