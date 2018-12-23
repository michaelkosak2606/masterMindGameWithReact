import React, { Component } from 'react';
import Header from './components/Header'
import InfoBoard from './components/InfoBoard'
import GameRow from './components/GameRow'
import Spielfiguren from './components/Spielfiguren'
import './App.css';

class App extends Component {
  state = {
    turn: 1,
    colors:
      [
        { id: 1, color: null },
        { id: 2, color: null },
        { id: 3, color: null },
        { id: 4, color: null }
      ],
    gamerows: [null, "inactive", "inactive", "inactive", "inactive", "inactive"],
    figuren: ["#FFDC00", "pink", "aquamarine", "#01FF70", "#0074D9", "#111111"]
  }
  onDragOverHandler = event => {
    event.preventDefault()
  }
  onDragStartHandler = (event, colorDragged) => {
    console.log("dragging element with color: " + colorDragged)
    event.dataTransfer.setData("colorDragged", colorDragged)
  }
  onDropHandler = (event, indexOfDropCircle) => {
    let colorDragged = event.dataTransfer.getData("colorDragged")
    let colors = this.state.colors.map(color => { return { ...color } })
    colors[indexOfDropCircle].color = colorDragged

    this.setState({
      colors: colors
    })
  }

  render() {
    const gameboard = this.state.gamerows.map((row, index) => {
      return (
        <GameRow
          key={index}
          onDragOver={this.onDragOverHandler}
          onDrop={this.onDropHandler}
          data={this.state}
          clickable={row}
        />
      )
    })



    return (
      <div className="App">
        <Header />
        <InfoBoard turnNumber={this.state.turn}
        />
        <div className="gameboard">
          {gameboard}
        </div>
        <Spielfiguren
          data={this.state}
          onDragStart={this.onDragStartHandler}
        />
      </div>
    );
  }
}

export default App;
