import React, { Component } from 'react';
import InfoBoard from './components/InfoBoard'
import GameRows from './components/Gamerows'
import HiddenColors from './components/HiddenColors'
import SideBoard from './components/SideBoard'
import LoadingCirlce from "./components/LoadingCircle";
import GameEndMessage from "./components/GameEndMessage";
import { initialState } from './initialState'
import './App.css';

class App extends Component {

  state = {
    loading: true,
    gameEndMessage: 'Text',
    gameEnded: false,
    showHiddenColors: false,
    turn: 0,
    hiddenColors: [],
    gamerows: [],
    gamePieces: []
  }
  componentWillMount() {
    this.setState({
      hiddenColors: initialState.hiddenColors,
      gamerows: initialState.gamerows,
      gamePieces: initialState.gamePieces
    })
  }
  componentDidMount() {
    this.loadingReady()
    const value = { ...this.state.gameEndMessage }
    localStorage.setItem("state", value)
  }

  fillHiddenColors = () => {
    const colors = [...this.state.gamePieces, 'transparent']
    let randomNumbers = []
    for (let i = 1; i <= this.state.hiddenColors.length; i++) {
      let randomNumber = Math.floor((Math.random() * colors.length))
      if (randomNumber === colors.length) { randomNumber = colors.length - 1 }
      randomNumbers.push(randomNumber)
    }
    const hiddenColors = randomNumbers.map(randomNumber => {
      return (colors[randomNumber])
    })
    this.setState({
      hiddenColors: hiddenColors
    })
  }

  onDragOverHandler = event => {
    event.preventDefault()
  }

  onDragStartHandler = (event, colorDragged) => {
    event.dataTransfer.setData("colorDragged", colorDragged)
  }
  onDragOutHandler = (event, colorDraggedId, colorDragged) => {
    event.dataTransfer.setData("colorDragged", colorDragged)

    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
    let turn = this.state.turn
    let colorArray = this.state.gamerows[turn].colors.map(color => { return { ...color } })
    colorArray.find(object => object.id === colorDraggedId).color = "transparent"
    gamerows[turn].colors = colorArray

    this.setState({
      gamerows: gamerows
    })
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
    let differenceToFill = this.state.hiddenColors.length - guessedColors.length
    for (let i = 0; i < differenceToFill; i++) {
      guessedColors.push('transparent')
    }

    ///Putting guessedColors into state
    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
    gamerows[turn].guessedColors = guessedColors

    if (JSON.stringify(guessedColors) === JSON.stringify(["black", "black", "black", "black"])) {
      this.setState({
        gamerows: gamerows,
        gameEnded: true,
        gameEndMessage: "You won, congratulations! :)",
        showHiddenColors: true
      })

    } else if (JSON.stringify(guessedColors) !== JSON.stringify(["black", "black", "black", "black"]) && this.state.turn === 5) {
      this.setState({
        gamerows: gamerows,
      }, () => this.gameEnded())
    }
    else {
      this.setState({
        gamerows: gamerows
      }, () => this.nextRound())
    }
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

  newGame = () => {
    let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })

    for (let i = 0; i < this.state.gamerows.length; i++) {
      gamerows[i].colors.forEach(color => color.color = "transparent")
      gamerows[i].guessedColors.forEach((color, index, guessedColors) => guessedColors[index] = "transparent")
      gamerows[this.state.turn].status = "inactive"
      gamerows[0].status = null
    }
    this.setState({
      turn: 0,
      gamerows: gamerows,
      gameEnded: false,
      gameEndMessage: "Text",
      loading: true,
      showHiddenColors: false
    }, () => this.loadingReady())
  }
  gameEnded = () => {
    if (this.state.gameEnded === false) {
      const turn = this.state.turn
      let gamerows = this.state.gamerows.map(gamerow => { return { ...gamerow } })
      gamerows[turn].status = "inactive"
      this.setState({
        gameEnded: true,
        gamerows: gamerows,
        gameEndMessage: "Sorry, you lost!"
      }, () => setTimeout(() => this.setState({ showHiddenColors: true }), 500)
      )
    }
  }
  loadingReady = () => {
    setTimeout(() => this.setState({ loading: false }, () => { this.fillHiddenColors() }), 1200)
  }


  render() {
    const loadingMessage = this.state.loading ? <LoadingCirlce /> : "Good Luck!"
    const slideClass = this.state.gameEnded ? "slide-out" : ""
    const opacityHiddenColors = this.state.showHiddenColors ? "1" : "0"

    return (
      <div className="App browse-container">
        <InfoBoard
          turnNumber={this.state.turn}
          newGame={this.newGame}
          giveUp={this.gameEnded}
        />

        <div className="gameboard">
          <GameRows
            gamerows={this.state.gamerows}
            turn={this.state.turn}
            onDragOver={this.onDragOverHandler}
            onDrop={this.onDropHandler}
            onDragOut={this.onDragOutHandler}
            nextRound={this.checkSameColors}
          />
          <GameEndMessage
            gameEnded={this.state.gameEnded}
            gameEndMessage={this.state.gameEndMessage}
          />
          <HiddenColors
            hiddenColors={this.state.hiddenColors}
            opacity={opacityHiddenColors}
            slideOut={slideClass}
            gameEndMessage={this.state.gameEndMessage}
            loadingMessage={loadingMessage}
            gameEnded={this.state.gameEnded}
          />
        </div>
        <SideBoard
          data={this.state}
          onDragStart={this.onDragStartHandler}
        />
      </div>
    );
  }
}

export default App;
