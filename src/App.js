import React from 'react';
import RoundIconButton from '../src/component/RoundIconButton.js';
import houseLogo from '../src/image/icon_house.svg';
import goldLogo from '../src/image/icon_gold.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '10px',
      }}>
        <RoundIconButton
          icon={houseLogo}
          background='white'
          text='房产投资'
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
