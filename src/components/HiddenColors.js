import React from 'react'

const HiddenColors = props => {
    const hiddenColorsRow = props.hiddenColors.map((hiddenColor, index) => {
        return (
            <div
                className="game-circle"
                key={index}
            >
                <div
                    className="circle-inside"
                    style={{ backgroundColor: `${hiddenColor}` }}
                >
                </div>
            </div>
        )
    })
    return (
        <div className="hidden-colors-container">
            <div className={"hidden-colors-board " + props.slideOut}>
                <h1 >
                    {props.loadingMessage}
                </h1>
            </div>
            <div className="hidden-colors" style={{ opacity: props.opacity }}>
                {hiddenColorsRow}
            </div>
        </div>
    )
}


export default HiddenColors
