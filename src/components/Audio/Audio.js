import React, { Component } from "react";

export default class Audio extends Component {
  render() {
    return (
    <div>
      <audio data-key={this.props.dataKey} src={this.props.audio} id={this.props.id} className='clip'></audio>
    </div>
    )
  }
}
