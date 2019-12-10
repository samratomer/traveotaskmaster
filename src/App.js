import React, { useState } from "react";
import "./App.css";
import Carousel from "./carousel/carousel";

export default class App extends React.Component {
  state = {
    width: "600",
    height: "500"
  };

  render() {
    return (
        <div className="App">
          <div><span>width</span>
            <input
                placeholder={"Please Enter Width"}
                value={this.state.width}
                onChange={e => this.setState({ width: e.target.value })}
            />
            <span>height</span>
            <input
                placeholder={"Please Enter Height"}
                value={this.state.height}
                onChange={e => this.setState({ height: e.target.value })}
            />
          </div>
          <header className="App-header">
            <Carousel
                width={parseInt(this.state.width)}
                height={parseInt(this.state.height)}
            />
          </header>
        </div>
    );
  }
}
