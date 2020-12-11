import React from 'react';

import sunBallLogo from '../image/icon_sun_ball.svg';
import sunFlareLogo from '../image/icon_sun_flare.svg';
import styled, { keyframes } from "styled-components";

export default class HomeBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    // Create the keyframes
        const rotate = keyframes`
                               from {
                                   transform: rotate(0deg);
                               } to {
                                   transform: rotate(360deg);
                               }`;
        const Rotate = styled.image`
                              position: absolute;
                              top:0;
                              left:0;
                              display: inline-block;
                              animation: ${rotate} 25s linear;
                              font-size: 0rem;
                              padding:2rem 2rem;`;

        return (
            <div style={{
                background: 'transparant',
                padding: '10px',
                borderRadius: '10px',
              }}>
        
                <div style={{
                  width: '100%',
                  height: 220,
                  background:'linear-gradient(to bottom right, white, white, white, #E5F7FF,#B2E7FF, #99DFFF)',
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
                  marginLeft: '30%',
                  zIndex:999,
                  fontWeight:900,
                  marginTop: '7rem',
                }}>现在所拥有的就是最好的，而努力可以让明天更好</p><br />
            </div>
        );
    }
}