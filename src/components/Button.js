import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
                <button className="gameHistoryButton"> {this.props.text}</button>
            </div>
        )
    }
}

export default Button
