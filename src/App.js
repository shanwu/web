import React from 'react';
import styled, { keyframes } from "styled-components";

import RoundIconButton from '../src/component/RoundIconButton.js';
import houseLogo from '../src/image/icon_house.svg';
import goldLogo from '../src/image/icon_gold.svg';
import sunBallLogo from '../src/image/icon_sun_ball.svg';
import sunFlareLogo from '../src/image/icon_sun_flare.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.image`
  position: absolute;
  top:0;
  left:0;
  display: inline-block;
  animation: ${rotate} 10s linear infinite;
  font-size: 0rem;
  padding:2rem 2rem;
  `;
  

    // https://www.styled-components.com/docs/api#css

  var sunFlareStyle = {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 35,
    height: 35,
    background: 'transparent',
    margin: 0,
  };
    return (
      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '10px',
      }}>
        <img style={{
          position: 'absolute',
          top: 32,
          left: 32,
          width: 35,
          height: 35,
          background: 'transparent',
          margin: 0,
        }} src={sunBallLogo} alt="sun" />
        <Rotate><img width='35px' height='35px' position='absolute' src={sunFlareLogo} alt="my image" /></Rotate>
        <RoundIconButton
          icon={houseLogo}
          background='white'
          text='房产投资'
          marginTop='80px'
          marginButton= '25px'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('house') }} />

        <RoundIconButton
          icon={goldLogo}
          marginLeft='20px'
          background='white'
          text='黄金买卖'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('gold') }} />
      </div>

    );
  }

}
