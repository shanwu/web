import React from 'react';

export default class PriceRentalRatioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: null,
      totalCost: null,
      priceRentalRatio: '请输入数值'
    };
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleRentChange = this.handleRentChange.bind(this);
  }
  updatePriceRentalRatioStr(rent, houseCost) {
    var message = "";
    if (isNaN(rent) || rent <= 0) {
      return "请输入租金金额";
    }
    if (isNaN(houseCost) || houseCost <= 0) {
      return "请输入房屋成本";
    }
    let ratio = rent * 12 / houseCost * 100;
    message = ratio.toFixed(1) + '%'

    return message;
  }

  handleCostChange(event) {
    let ratioDesc = this.updatePriceRentalRatioStr(this.state.rent, event.target.value);
    console.log('=====handleCostChange======');
    this.setState(({
      totalCost: event.target.value,
      priceRentalRatio: ratioDesc,
    }));
  }

  handleRentChange(event) {
    let ratioDesc = this.updatePriceRentalRatioStr(event.target.value, this.state.totalCost);
    console.log('=====handleRentChange======');
    this.setState(({
      rent: event.target.value,
      priceRentalRatio: ratioDesc,
    }));
  }



  render() {
    return (
      <div>
        <h1 style={{
          color: "#66b2ff",
          fontSize: 20,
          marginLeft: 20,
          marginBottom: 10,
        }}>房屋租售比</h1> <hr style={{
          borderColor: '#66b2ff',
        }} />
        <h4 style={{
          color: '#333',
          fontSize: '14px',
          marginLeft: 20,
          marginRight: 20,
          marginTop: '5px',
          marginBottom: 0,
        }}>
          租售比，一般情况下指普通消费者都把它归纳为房屋租金与售价的比例, 租售比 = 租金收益/房价。
          </h4>
        <h4 style={{
          color: '#333',
          fontSize: '14px',
          marginLeft: 20,
          marginRight: 20,
          marginTop: '5px',
          marginBottom: 0,
        }}>
          比如说总成本 200万的房，每月租金为 3000元，每年租⾦回报有 3000 * 12 = 36000元，
          </h4>
        <h4 style={{
          color: '#333',
          fontSize: '14px',
          marginLeft: 20,
          marginRight: 20,
          marginTop: '5px',
          marginBottom: '15px',
        }}>
          则租售比为 36,000 ÷ 2,000,000 = 1.8%
          </h4>
        <form style={{
          color: '#333',
          fontSize: '14px',
          marginLeft: 20,
          marginRight: 20,
          marginTop: '5px',
          marginBottom: '5px',
        }}>
          <h1 style={{
            color: '#333',
            fontSize: '14px',
            marginTop: '5px',
            marginBottom: '8px'
          }}>租售比计算器</h1>
          <input
            style={{
              width: '100px',
              textAlign: 'center',
            }}
            type="number" value={this.state.rent} onChange={this.handleRentChange} placeholder="每月房租" />
          <label> x 12 ÷ </label>
          <input
            style={{
              width: '100px',
              textAlign: 'center'
            }}
            type="number" value={this.state.totalCost} onChange={this.handleCostChange} placeholder="房屋总成本" />
          <label> = </label><label name="priceRentalRatio"> {this.state.priceRentalRatio} </label>
        </form>

      </div>
    );
  }
}