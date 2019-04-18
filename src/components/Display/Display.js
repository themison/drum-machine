import React, { Component } from "react";


/* styles */

import "./styles.scss";

export default class Display extends Component {
  render() {
    return (
    <div id='display'>
      {this.props.value}
    </div>
    )
  }
}
