import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Master Mind </h1>

                <span> New Game</span>
                <span> Give up</span>
            </div>
        )
    }
}

export default Header
