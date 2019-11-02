import React from 'react';

// 在租售⽐是4到6之间是不做买卖的，它是
// 观察区域。3和7这样的⼀个过程，其实对于刚需来说就⽆所谓。2和
// 8，是必须做买卖、决策的“点”

// 举例，2002年，
// 10/17
// 我买房⼦的时候，那个时候的租息⽐，因为那个时候，由于⾦融风
// 暴，为了维持港币的汇率，所以利息就调到最⾼，最⾼时候调到
// 18%，10%以上，在很长⼀段时间会维持利率是10%以上，所以很多
// 买楼的供楼的⼈破产跳楼，这个烧炭⾃杀。在这个时候，租息⽐会出
// 现⼀种很扭曲的状态，所以才会导致租售⽐进⼊到极度扭曲。正确的
// 理解了租息⽐和租售⽐的关系，才是⼀个真正的⾼⼿处理房价必备的
// 能⼒。
//  租息⽐也是很有趣的，⽐如说1000万元的房⼦，如果年息6%就
// 是60万元，60万除以12就是5万元，那么也就是告诉你有⼀个房⼦，
// ⽉租是5万，那么利率是6%，租息⽐就是1:1，租息⽐就是1。租息⽐
// 是1这样的房⼦就是⼀个合理⽔平，通常租息⽐在1的时候，正常的情
// 况下，这个房⼦，如果是⾃⽤的话就可以买了。
//  有时候租息⽐会变得很夸张，就是租⾦⽐利息要低很多，⽐如说
// 此刻，你们见到的租息⽐可能就很夸张。在特殊情况下，租息⽐又会
// 变的另外⼀种夸张，利息极低，租⾦⾼，这会导致好多⼈昏了头去买
// 东西。
//  记住，由于经济会发⽣危机，⽆论是进⼊到萧条还是危机状况，
// 我们可能很快会经历这样的过程，租息⽐会发⽣变化，租息⽐会导致
// 租售⽐的剧烈的变动，你仍然是以租售⽐为依据，参考租息⽐来做决
// 策。

// 我刚才说了纸和笔，我刚才讲了租售⽐，讲了租息⽐，⼤家都采
// 取函数的⽅式，纵轴是这个⽐值关系，横轴是时间。我希望⼤家对⾃
// ⼰所处区域的房价做出⼀个函数图形，哪怕你就把你们家现在这个住
// 的地⽅函数图形做出来，就是过去⼗年和未来⼗年的，过去⼗年是已
// 经发⽣的，你可以把它函数图形做出来；未来⼗年是你估计的，你给
// 它⼀个⼤胆的估计吧，把租售⽐、租息⽐做出图型来，做出图形来⼀
// 看，你其实已经知道你该⼲什么了。 

// 租税⽐如果是个负值的话，
// 11/17
// 那么你要考虑买房⼦的意义了。为什么西⽅⼈不买房⼦，为什么德国
// ⼈60%是租房⼦，就是因为这个租税⽐。特别是在海外买房，⼀定要
// 仔细看这个租税⽐。

// https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx
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