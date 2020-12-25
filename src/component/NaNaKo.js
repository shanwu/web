import React from 'react';
import commentIcon from '../image/comment.svg'
import sunBallLogo from '../image/icon_sun_ball.svg';
import sunFlareLogo from '../image/icon_sun_flare.svg';
import styled, { keyframes } from "styled-components";

export default class NaNaKo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div style={{
                zIndex:999,
                background: 'transparant',
                position: 'fixed',
              }}>
                  <div>
                      <img style={{
                          zIndex:1,
                          marginLeft: '150px',
                          marginBottom: '0px'
                          }} src={commentIcon} width="100px" />
                      <p style={{
                          marginLeft: '165px',
                          marginTop:'-85px',
                          position: "fixed",
                          zIndex:2,
                      }}>主人很废<br/>请多见谅…</p>
                  </div>

                  <p style= {{
                      marginTop:'50px',
                      position:"relative",
                      marginTop: '0px',
                      fontSize: '50px'
                  }}>(￣_,￣ )</p>
            </div>
        );
    }
}