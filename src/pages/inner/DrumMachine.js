import React, { Component } from 'react';
import Button from '../../components/Button'
import Display from '../../components/Display'


/* styles */
import './styles.scss'

/* sounds */

import boom from '../../sounds/boom.wav'
import clap from '../../sounds/clap.wav'
import hihat from '../../sounds/hihat.wav'
import kick from '../../sounds/kick.wav'
import openhat from '../../sounds/openhat.wav'
import ride from '../../sounds/ride.wav'
import snare from '../../sounds/snare.wav'
import tink from '../../sounds/tink.wav'
import tom from '../../sounds/tom.wav'




export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }



  componentWillMount() {
    window.addEventListener('keydown',(e)=>{
        const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        if(!div) return;
        this.setState({
          value: div.getAttribute('value')
        })

        if (!audio) return;

        div.classList.add('playing');

        audio.currentTime = 0;
        audio.play();
    })
  }

  componentDidMount() {
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.drum-pad'));
    console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  }

  onClick = (e) =>{
    const target = e.target;
  

    const dataKey = target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    if(!target) return;
    this.setState({
      value: target.getAttribute('value')
    })

    if (!audio) return;

    target.classList.add('playing');

    audio.currentTime = 0;
    audio.play();    
  
  }

  render() {

    return (
      <div className='wrapper'>
      <Display value={this.state.value}></Display>
        <div id='drum-machine' onClick={(e)=>this.onClick(e)}>
          <Button dataKey='81' audio={boom} value='boom'>Q</Button>
          <Button dataKey='87' audio={clap} value='clap'>W</Button>
          <Button dataKey='69' audio={hihat} value='hihat'>E</Button>
          <Button dataKey='65' audio={kick} value='kick'>A</Button>
          <Button dataKey='83' audio={openhat} value='openhat'>S</Button>
          <Button dataKey='68' audio={ride} value='ride'>D</Button>
          <Button dataKey='90' audio={snare} value='snare'>Z</Button>
          <Button dataKey='88' audio={tink} value='tink'>X</Button>
          <Button dataKey='67' audio={tom} value='tom'>C</Button>
        </div>
      </div>
    )
  }
} 