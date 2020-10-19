import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class MemoriaComponent extends Component {
    static propTypes = {
        memoria1: PropTypes.string,
        memoria2: PropTypes.string,
        memoria3: PropTypes.string,
        memoria4: PropTypes.string,
    };

    render() {
        return (
            <div className="memoria-component">
                <div className="memoria1-component">
                    <p>{this.props.memoria1}</p>
                </div>
                <div className="memoria2-component">
                    <p>{this.props.memoria2}</p>
                </div>
                <div className="memoria3-component">
                    <p>{this.props.memoria3}</p>
                </div>
                <div className="memoria4-component">
                    <p>{this.props.memoria4}</p>
                </div>
            </div>
        );
    }
}