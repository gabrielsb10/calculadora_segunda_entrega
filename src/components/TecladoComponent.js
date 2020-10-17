import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

export default class TecladoComponent extends Component {
    static propTypes = {
        clickHandler: PropTypes.func,
      };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
      };
    render() {
        return (
            <div className="teclado-component">
                
                <Button name="7" clickHandler={this.handleClick} gray/>
                <Button name="8" clickHandler={this.handleClick} gray/>
                <Button name="9" clickHandler={this.handleClick} gray/>
                <Button name="+" clickHandler={this.handleClick} orange/><br/>
                
                <Button name="4" clickHandler={this.handleClick} gray/>
                <Button name="5" clickHandler={this.handleClick} gray/>
                <Button name="6" clickHandler={this.handleClick} gray/>
                <Button name="-" clickHandler={this.handleClick} orange/><br/>

                <Button name="1" clickHandler={this.handleClick} gray/>
                <Button name="2" clickHandler={this.handleClick} gray/>
                <Button name="3" clickHandler={this.handleClick} gray/>
                <Button name="x" clickHandler={this.handleClick} orange/><br/>

                <Button name="0" clickHandler={this.handleClick} gray/>
                <Button name="." clickHandler={this.handleClick} gray/>
                <Button name="AC" clickHandler={this.handleClick} black/>
                <Button name="÷" clickHandler={this.handleClick} orange/><br/>

                <Button name="=" clickHandler={this.handleClick} wide orange/>
                 
            </div>
        );
    }
}