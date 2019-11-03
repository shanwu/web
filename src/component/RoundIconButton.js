import React from 'react';

export default class RoundIconButton extends React.Component {
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
            }} onClick={() => { this.props.onClickListener() }}><img style={{
                position: 'absolute',
                top: 5,
                left: 5,
                width: 35,
                height: 35,
                background: 'transparent',
                margin: 0,
            }}
                src={this.props.icon} alt="my image" />
                <label style={{
                    color: this.props.textColor,
                    fontSize: '20px',
                    position: "absolute",
                    left: this.props.height,
                    top: '10px',
                    userSelect: 'none',
                    background: 'transparent',
                }}>{this.props.text}</label></button>
        );
    }

}