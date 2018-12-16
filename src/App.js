import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
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

    const spielFiguren = this.state.figuren.map((figurFarbe, index) => {
      return (
        <div
          draggable
          onDragStart={event => this.onDragStartHandler(event, figurFarbe)}
          index={index}
          className="circleInside spielfiguren"
          style={{ backgroundColor: `${figurFarbe}` }}
        >
        </div>
      )
    })

    return (
      <div className="App">
        <h2 className="header">Master Mind </h2>
        <div className="leftside"> Some infos </div>
        <div className="gameboard">
          {spielFelder}
          <button className="gameHistoryButton"> Try it!!</button>
        </div>
        <div className="spielfiguren">
          {spielFiguren}
        </div>
      </div>
    );
  }
}

export default App;
