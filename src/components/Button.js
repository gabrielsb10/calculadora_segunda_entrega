import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = ["component-button",
    this.props.orange ? "orange" : "",
    this.props.gray ? "gray" : "",
    this.props.black ? "black" : "",
    this.props.wide ? "wide" : ""];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}