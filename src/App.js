import React, { Component } from 'react';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";
import TecladoComponent from "./components/TecladoComponent";
import calculate from "./logica/calculate";

export default class App extends Component {
    state = {
      anterior: null,
      result: '0',
      operation: null,
    };
  
    handleClick = buttonName => {
      this.setState(calculate(this.state, buttonName));
    };
  
    render() {
      return (
        <div>
            <div className="calculadora">
                <DisplayComponent display={this.state.anterior + this.state.operation || ''} />
                <DisplayComponent display={this.state.result} />
                <TecladoComponent clickHandler={this.handleClick}/>
            </div>
          </div>
      );
    }
  }
