import React from 'react';

export default class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button style={{
                marginTop: this.props.marginTop,
                marginLeft: this.props.marginLeft,
                marginBottom: this.props.marginBottom,
                marginRight: this.props.marginRight,
                background: this.props.background,
                position: 'relative',
                width: this.props.width,
                height: this.props.height,
                borderRadius: this.props.roundRadius,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
            }} onClick={() => { this.props.onClickListener() }}>
                <label style={{
                    color: this.props.textColor,
                    fontSize: '20px',
                    position: "absolute",
                    left: 10,
                    top: '10px',
                    width: '63%',
                    height: '75%',
                    marginBottom: 10,
                    marginRight:200,
                    userSelect: 'none',
                    display: 'block',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                }}>{this.props.text}</label>
                
                <img style={{
                    position: 'absolute',
                    top: '10px',
                    left: 325,
                    width: '30%',
                    height: '75%',
                    margin: 0,
                }} src={this.props.icon} alt="my image" />
                
                <div style={{
                        background: 'transparant',
                        position: "absolute",
                        width:'100%',
                        height:'15%',
                        left:'10px',
                        top: '83%',
                        }}>
                    <label style={{
                        color: 'gray',
                        fontSize: '20px',
                        position: "absolute",
                        userSelect: 'none',
                        left:'0px',
                        background: 'transparent',
                    }}>{this.props.date}</label>
                    <label style={{
                        color: 'gray',
                        fontSize: '20px',
                        position: "absolute",
                        userSelect: 'none',
                        right:'30px',
                    }}>{this.props.tag}</label>
                </div>
                </button>
        );
    }

}