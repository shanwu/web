import React from 'react';
import styled, { keyframes } from "styled-components";

import RoundIconButton from '../src/component/RoundIconButton.js';
import houseLogo from '../src/image/icon_house.svg';
import goldLogo from '../src/image/icon_gold.svg';
import sunBallLogo from '../src/image/icon_sun_ball.svg';
import sunFlareLogo from '../src/image/icon_sun_flare.svg';
import accountLogo from '../src/image/icon_account.svg';

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
  animation: ${rotate} 25s linear;
  font-size: 0rem;
  padding:2rem 2rem;
  `;


    // https://www.styled-components.com/docs/api#css
    return (
      <div style={{
        background: 'transparent',
        padding: '10px',
        borderRadius: '10px',
      }}>
        <div style={{
          width: '100%',
          height: 220,
          background:'linear-gradient(to top left, #F0F8FF,#fff)',
          position: 'absolute',
          left: 0,
          top: 0,
        }} />
        <img style={{
          position: 'absolute',
          top: 32,
          left: 32,
          width: 96,
          height: 96,
          background: 'transparent',
          margin: 0,
        }} src={sunBallLogo} alt="sun" />
        <Rotate><img width='96px' height='96px' position='absolute' src={sunFlareLogo} alt="my image" /></Rotate>
        <p style={{
          color:'#3a3a3a',
          position: 'absolute',
          marginLeft: '60%',
          zIndex:999,
          top: 150,
        }}>现在所拥有的就是最好的，而努力可以让明天更好</p><br />

        <RoundIconButton
          icon={houseLogo}
          background='white'
          text='房产投资'
          marginTop='160px'
          marginBottom='25px'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('house') }} />

        <RoundIconButton
          icon={goldLogo}
          marginLeft='10px'
          marginTop='20px'
          marginBottom='20px'
          background='white'
          text='黄金买卖'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('gold') }} />

        {/* <RoundIconButton
          icon={accountLogo}
          marginLeft='10px'
          marginTop='20px'
          marginBottom='20px'
          background='white'
          text='帐号管理'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('register') }} /> */}
      </div>
    );
  }

}
