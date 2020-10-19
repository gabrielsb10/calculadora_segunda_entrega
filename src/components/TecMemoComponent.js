import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

export default class TecMemoComponent extends Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };
    render() {
        return (
            <div className="tecmemo-component">
                <div className="tecmemo1">
                <Button name="MC1" clickHandler={this.handleClick} orange memo/>
                <Button name="MR1" clickHandler={this.handleClick} orange memo/><br/>
                </div>
                <div className="tecmemo2">
                <Button name="MC2" clickHandler={this.handleClick} orange memo/>
                <Button name="MR2" clickHandler={this.handleClick} orange memo/><br/>
                </div>
                <div className="tecmemo3">
                <Button name="MC3" clickHandler={this.handleClick} orange memo/>
                <Button name="MR3" clickHandler={this.handleClick} orange memo/><br/>
                </div>
                <div className="tecmemo4">
                <Button name="MC4" clickHandler={this.handleClick} orange memo/>
                <Button name="MR4" clickHandler={this.handleClick} orange memo/><br/>
                </div>
            </div>
        );
    }
}