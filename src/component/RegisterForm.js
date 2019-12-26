import React from 'react';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idValue: '',
            passwrdValue: '',
            rePasswrdValue: '',
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePasswrdChange = this.handlePasswrdChange.bind(this);
        this.handleRePasswrdChange = this.handleRePasswrdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleIdChange(event) {
        this.setState({idValue: event.target.value});
    }

    handleSubmit(event) {
        var result = validFormValue(this.state.idValue, this.state.passwrdValue, this.state.rePasswrdValue);
        if(!result) {
            alert('Please check your input!')
            return;
        }
        alert('id: ' + this.state.idValue + '\npasswrd: '+ this.state.passwrdValue+ '\nre-passwrd: '+ this.state.rePasswrdValue)
        event.preventDefault();
    }

    handlePasswrdChange(event) {
        this.setState({passwrdValue: event.target.value});
    }

    handleRePasswrdChange(event) {
        this.setState({rePasswrdValue: event.target.value});
    }



    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <label >
                    Id:
                    <input type="text" value={this.state.idValue} onChange={this.handleIdChange} />
                </label><br/>
                <label>
                    Password:
                    <input type='password' value={this.state.passwrdValue} onChange={this.handlePasswrdChange} />
                </label><br/>
                <label>
                    Re-Enter Password:
                    <input type='password' value={this.state.rePasswrdValue} onChange={this.handleRePasswrdChange} />
                </label><br/>
                <input type='submit' value='发出'/>
            </form>
        );
    }

}


function validFormValue(id, passwrd, rePassWrd) {
    if(id === '' || passwrd === '' || rePassWrd === '') {
        return false;
    } 

    return passwrd === rePassWrd;
}