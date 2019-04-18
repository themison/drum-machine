import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DrumMachine from '../inner/DrumMachine'

export default class App extends Component {

  componentWillMount() {
    var script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <DrumMachine></DrumMachine>
    );
  }
}
