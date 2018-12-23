import React, { Component } from 'react';
import Header from './components/Header'
import InfoBoard from './components/InfoBoard'
import Button from './components/Button'
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
    const spielFelder = this.state.colors.map((colorInside, index) => {
      return (
        <div
          className="gameCircle"
          key={colorInside.id}
        >
          <div
            onDragOver={event => this.onDragOverHandler(event)}
            onDrop={event => this.onDropHandler(event, index)}
            className="circleInside"
            style={{ backgroundColor: `${colorInside.color}` }}
          >

          </div>
        </div>
      )
    })

    

    return (
      <div className="App">
           <Header />
           <InfoBoard turnNumber = {this.state.turn} 
           />
          <div className="gameboard">
            <div className="hits">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
              {spielFelder}
              <Button />        
          </div>
        <Spielfiguren 
        data = {this.state}
        onDragStart ={this.onDragStartHandler}
        />
      </div>
    );
  }
}

export default App;
