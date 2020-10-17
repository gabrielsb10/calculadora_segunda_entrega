import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class DisplayComponent extends Component {
    static propTypes = {
        display: PropTypes.string,
    };

    render() {
        return (
            <div className="display-component">
                <p>{this.props.display}</p>
            </div>
    )
        ;
    }
}