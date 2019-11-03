import React from 'react';
import RoundIconButton from '../src/component/RoundIconButton.js';
import houseLogo from '../src/image/icon_house.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <RoundIconButton
          icon={houseLogo}
          marginTop='20px'
          background='#CCFFFF'
          text='房产投资'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('house') }} />
      </div>

    );
  }

}
