import React, { Component } from "react";
import Audio from '../Audio'

/* styles */

import "./styles.scss";

export default class Button extends Component {
  render() {
    return (
    <div className="drum-pad" data-key={this.props.dataKey} value={this.props.value} onClick={this.props.onClick} id={this.props.audio}> 
      {this.props.children}
      <Audio audio={this.props.audio} dataKey={this.props.dataKey} id={this.props.children}></Audio>
    </div>
    )
  }
}
