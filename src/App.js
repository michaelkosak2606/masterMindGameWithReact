import React, { Component } from 'react';
import Header from './components/Header'
import InfoBoard from './components/InfoBoard'
import GameRow from './components/GameRow'
import Spielfiguren from './components/Spielfiguren'
import './App.css';

class App extends Component {
  state = {
    turn: 0,

    // gamerows: [null, "inactive", "inactive", "inactive", "inactive", "inactive"],

    gamerows: [
      {
        status: null,
        colors: [
          { id: 1, color: null },
          { id: 2, color: null },
          { id: 3, color: null },
          { id: 4, color: null }
        ]
      },
      {
        status: "inactive",
        colors: [
          { id: 5, color: null },
          { id: 6, color: null },
          { id: 7, color: null },
          { id: 8, color: null }
        ]
      },
      {
        status: "inactive",
        colors: [
          { id: 9, color: null },
          { id: 10, color: null },
          { id: 11, color: null },
          { id: 12, color: null }
        ]
      },
      {
        status: "inactive",
        colors: [
          { id: 13, color: null },
          { id: 14, color: null },
          { id: 15, color: null },
          { id: 16, color: null }
        ]
      },
      {
        status: "inactive",
        colors: [
          { id: 17, color: null },
          { id: 18, color: null },
          { id: 19, color: null },
          { id: 20, color: null }
        ]
      },
      {
        status: "inactive",
        colors: [
          { id: 21, color: null },
          { id: 22, color: null },
          { id: 23, color: null },
          { id: 24, color: null }
        ]
      },

    ],
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
    let turn = this.state.turn
    let colorArray = this.state.gamerows[turn].colors.map(color => { return { ...color } })
    colorArray.find(object => object.id === indexOfDropCircle).color = colorDragged

    //Setting State
    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
    gamerows[turn].colors = colorArray
    this.setState({
      gamerows: gamerows
    })
  }

  nextRound = () => {
    let turn = this.state.turn
    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
    gamerows[turn].status = "inactive"
    let nextTurn = turn + 1
    gamerows[nextTurn].status = null


    this.setState({
      turn: this.state.turn + 1
    }, () => {
      this.setState({
        gamerows: gamerows
      })
    })
  }

  render() {
    const gameboard = this.state.gamerows.map((row, index) => {
      return (
        <GameRow
          key={index}
          onDragOver={this.onDragOverHandler}
          onDrop={this.onDropHandler}
          data={this.state.gamerows[index].colors}
          clickable={row.status}
          nextRound={this.nextRound}
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
