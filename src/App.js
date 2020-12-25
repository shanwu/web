import React from 'react';
import HomeBanner from './component/HomeBanner.js'
import RoundIconButton from '../src/component/RoundIconButton.js';
import houseLogo from '../src/image/icon_house.svg';
import goldLogo from '../src/image/icon_gold.svg';
import accountLogo from '../src/image/icon_account.svg';
import latexLogo from '../src/image/icon_latex.svg'
import ArticleCard from './component/ArticleCard.js';
import exchangeRateLogo from '../src/image/exchange.svg'
import NaNako from '../src/component/NaNaKo.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {

    // https://www.styled-components.com/docs/api#css
    return (
      <div>
        <HomeBanner/>

        {/* <RoundIconButton
          icon={houseLogo}
          background='white'
          text='房产投资'
          marginTop='160px'
          marginBottom='25px'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('house') }} /> */}

        {/* <RoundIconButton
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
          onClickListener={() => { this.nextPath('gold') }} /> */}

        {/* { <RoundIconButton
          icon={accountLogo}
          marginLeft='10px'
          marginTop='20px'
          marginBottom='20px'
          background='white'
          text='注册登入'
          height='48px'
          width='150px'
          roundRadius='10px'
          textColor='#3a3a3a'
          onClickListener={() => { this.nextPath('register') }} /> } */}
        
        {/* { <RoundIconButton
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
          onClickListener={() => { this.nextPath('register') }} /> } */}
            <div style={{
                        background: 'transparant',
                        position: "absolute",
                        width:'100%',
                        height:'15%',
                        left:'15%',
                        top: '255px',
                        }}>
            { <ArticleCard
            icon={exchangeRateLogo}
            marginLeft='10%'
            marginRight='10%'
            marginTop='20px'
            marginBottom='20px'
            background='white'
            position='absolute'
            text='这是我申请IT互联网公司 PayPay 的 coding challenge project，这个 App 可以查看各国的货币汇率。'
            tag='#Android App'
            date='2020年12月23日'
            height='200px'
            width='500px'
            roundRadius='15px'
            textColor='#3a3a3a'
            onClickListener={() => { this.nextPath('currencies_exchange_article') }} /> }
            
            { <ArticleCard
            icon={latexLogo}
            marginLeft='10%'
            marginRight='10%'
            marginTop='20px'
            marginBottom='20px'
            background='white'
            position='absolute'
            text='第一篇内容，就来记录下学习机器学习时，在 Markdown 档案中常用的 Latex数学符号吧！'
            tag='#Latex'
            date='2020年12月11日'
            height='200px'
            width='500px'
            roundRadius='15px'
            textColor='#3a3a3a'
            onClickListener={() => { this.nextPath('latex_article') }} /> }


           
            </div>
            <div style={{
              position: 'absolute',
              left: '75%',
              top: '75%'
            }}>
              <NaNako/>
            </div>


      </div>
    );
  }

}
// position: 'absolute',
// marginLeft: '30%',
// zIndex:999,
