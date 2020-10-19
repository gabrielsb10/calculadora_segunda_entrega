import React, { Component } from 'react';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";
import TecladoComponent from "./components/TecladoComponent";
import MemoriaComponent from "./components/MemoriaComponent";
import TecMemoComponent from "./components/TecMemoComponent";
import calculate from "./logica/calculate";

export default class App extends Component {
  state = {
    anterior: null,
    result: '0',
    operation: null,
    salvo1: null,
    salvo2: null,
    salvo3: null,
    salvo4: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="calculadoramemo-container">
        <div className="calculadora-container">
          <DisplayComponent display={this.state.anterior + this.state.operation || ''} />
          <DisplayComponent display={this.state.result} />
          <TecladoComponent clickHandler={this.handleClick} />
        </div>
        <div className="memoria-container">
        <h1>Memória</h1>
          <div className="memoria-display">
            <div className="memoria1-display">
              <MemoriaComponent memoria1={this.state.salvo1 || null} />
            </div>
            <div className="memoria2-display">
              <MemoriaComponent memoria2={this.state.salvo2 || null} />
            </div>
            <div className="memoria3-display">
              <MemoriaComponent memoria3={this.state.salvo3 || null} />
            </div>
            <div className="memoria4-display">
              <MemoriaComponent memoria4={this.state.salvo4 || null} />
            </div>
          </div>
          <div className="memoria-teclado">
            <TecMemoComponent clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
