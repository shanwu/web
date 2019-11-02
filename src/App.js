import React from 'react';
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import houseLogo from '../src/image/icon_house.svg'
import { whileStatement, blockStatement } from '@babel/types';
import { relative } from 'path';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // todo
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <button style={{
        position:'relative',
        width:150,
        height:48,
        borderRadius:5,
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:4,
        paddingRight:4,
      }} onClick={() => this.nextPath('/house') }><img style={{
        position:'absolute',
        top:5,
        left:5,
        width:35,
        height:35,
        background:'transparent',
        margin:0,
      }}
      src={houseLogo} alt="my image"  />
      <label style={{
        fontSize:20,
        position:"absolute",
        left:56,
        top:13,
        background:'transparent',
      }}>房产投资</label></button>
    );
      // <button src="./image/house_icon.jpg" onClick={() => this.nextPath('/house') }>
      //   房屋投资考虑 
      // </button>    );
  }

}
