import React, { Component } from 'react';
import Header from './components/Header'
import InfoBoard from './components/InfoBoard'
import GameRow from './components/GameRow'
import HiddenColors from './components/HiddenColors'
import Spielfiguren from './components/Spielfiguren'
import './App.css';

class App extends Component {
  state = {
    hiddenColors: [null, null, null, null],
    turn: 0,
    gamerows: [
      {
        status: null,
        guessedColors: [null, null, null, null],
        colors: [
          { id: 1, color: null },
          { id: 2, color: null },
          { id: 3, color: null },
          { id: 4, color: null }
        ]
      },
      {
        status: "inactive",
        guessedColors: [null, null, null, null],
        colors: [
          { id: 5, color: null },
          { id: 6, color: null },
          { id: 7, color: null },
          { id: 8, color: null }
        ]
      },
      {
        status: "inactive",
        guessedColors: [null, null, null, null],
        colors: [
          { id: 9, color: null },
          { id: 10, color: null },
          { id: 11, color: null },
          { id: 12, color: null }
        ]
      },
      {
        status: "inactive",
        guessedColors: [null, null, null, null],
        colors: [
          { id: 13, color: null },
          { id: 14, color: null },
          { id: 15, color: null },
          { id: 16, color: null }
        ]
      },
      {
        status: "inactive",
        guessedColors: [null, null, null, null],
        colors: [
          { id: 17, color: null },
          { id: 18, color: null },
          { id: 19, color: null },
          { id: 20, color: null }
        ]
      },
      {
        status: "inactive",
        guessedColors: [null, null, null, null],
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
    // console.log("dragging element with color: " + colorDragged)
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

  checkSameColors = () => {
    let turn = this.state.turn
    let colorsFromPlayer = this.state.gamerows[turn].colors.map(color => { return color.color })
    //console.log(colors)
    let rightColors = [...this.state.hiddenColors]
    let guessedColors = []

    const colorsReduced = colorsFromPlayer.filter((color, index) => {
      return color !== rightColors[index]
    })
    const rightColorsReduced = rightColors.filter((rightColor, index) => {
      return rightColor !== colorsFromPlayer[index]
    })
    /////////////////////////////////////////////////////
    ///Putting Black Colors into guessed Array
    for (let i = 1; i <= colorsFromPlayer.length - colorsReduced.length; i++) {
      guessedColors.push("black")
    }
    /////////////////////////////////////////////////////
    ///Checking if everything is okay
    // console.log(colorsReduced)
    // console.log(rightColorsReduced)
    // console.log(guessedColors)

    //////////////////////////////////////////////////
    ///Checking reduced arrays to put white colors into guessedColors
    let helparray = []
    colorsReduced.forEach((item, index) => {
      for (let i = 0; i < rightColorsReduced.length; i++) {
        if (item === rightColorsReduced[i]) {
          helparray.push(item)
        }
      }
      if (helparray.length > 0) {
        guessedColors.push("white")
        let number = rightColorsReduced.indexOf(helparray[0])
        rightColorsReduced.splice(number, 1)
        helparray = []
      }
    })
    ////Fill guessedColors with null, if its shorter than 4
    console.log(guessedColors)
    let differenceToFill = 4 - guessedColors.length
    for (let i = 0; i < differenceToFill; i++) {
      guessedColors.push(null)
    }
    console.log(guessedColors)
    ///Putting guessedColors into state
    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
    gamerows[turn].guessedColors = guessedColors

    this.setState({
      gamerows: gamerows
    }, () => this.nextRound())
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
  fillHiddenColors = () => {
    const colors = [...this.state.figuren, null]
    let randomNumbersArray = []
    for (let i = 1; i <= 4; i++) {
      let randomNUmber = Math.floor((Math.random() * colors.length))
      if (randomNUmber === 7) { randomNUmber = 6 }
      randomNumbersArray.push(randomNUmber)
    }
    const hiddenColors = randomNumbersArray.map(randomNUmber => {
      return (colors[randomNUmber])
    })

    this.setState({
      hiddenColors: hiddenColors
    })

  }
  componentDidMount() {
    this.fillHiddenColors()
  }
  render() {
    const gameboard = this.state.gamerows.map((row, index) => {
      const checkTurnNumber = this.state.turn === index
      return (
        <GameRow
          key={index}
          onDragOver={this.onDragOverHandler}
          onDrop={this.onDropHandler}
          data={this.state.gamerows[index].colors}
          clickable={row.status}
          nextRound={this.checkSameColors}
          checkTurnNumber={checkTurnNumber}
          turn={this.state.turn}
          guessedColors={this.state.gamerows[index].guessedColors}
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
          <HiddenColors
            hiddenColors={this.state.hiddenColors}
          />
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
