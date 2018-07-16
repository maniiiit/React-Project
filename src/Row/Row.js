import React, { Component } from "react";
import "./Row.css";
import Box from "../Box/Box";
import { TransitionMotion, spring } from "react-motion";

class Row extends Component {
  renderBoxes = () => {
    let boxes = [];
    for (let i = 0; i < this.props.boxesCount; i++) {
      boxes.push(
        <Box
            key={i}
          boxStyle={{
            marginLeft: i == 0 ? 0 : this.props.boxSpace + "px"
          }}
        />
      );
    }
    return boxes;
  };
  render() {
    return(
        <div className="row" style={this.props.rowStyle}>
            {this.renderBoxes()}
        </div>
    )
  }
}

export default Row;
