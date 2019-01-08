import React from 'react'

const HiddenColors = ({ hiddenColors, slideOut, loadingMessage, opacity }) => {
    const hiddenColorsRow = hiddenColors.map((hiddenColor, index) => {
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
            <div className={"hidden-colors-board " + slideOut}>
                <h1 >
                    {loadingMessage}
                </h1>
            </div>
            <div className="hidden-colors" style={{ opacity: opacity }}>
                {hiddenColorsRow}
            </div>
        </div>
    )
}


export default HiddenColors
