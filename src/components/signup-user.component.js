import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBucketList extends Component {
    constructor(props) {
        super(props);

        this.onTextChangeUserName = this.onTextChangeUserName.bind(this);
        this.onTextChangeFirstName = this.onTextChangeFirstName.bind(this);
        this.onTextChangeLastName = this.onTextChangeLastName.bind(this);
        this.onTextChangePassword = this.onTextChangePassword.bind(this);
        this.onTextChangeConfirmPassword = this.onTextChangeConfirmPassword.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.navigateToSignIn = this.navigateToSignIn.bind(this);
        
        this.state = {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            confirmPassword: ''
        }
    }

    onTextChangeUserName(e) {
        this.setState({
            userName:e.target.value
        })
    }

    onTextChangeFirstName(e) {
        this.setState({
            firstName:e.target.value
        })
    }

    onTextChangeLastName(e) {
        this.setState({
            lastName:e.target.value
        })
    }

    onTextChangePassword(e) {
        this.setState({
            password:e.target.value
        })
    }

    onTextChangeConfirmPassword(e) {
        this.setState({
            confirmPassword:e.target.value
        })
    }

    componentDidMount() {
        console.log('Triggered componentDidMount')
    }
    
    onSignUp(e) {
        e.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        console.log("signup");

        const user = {
            userName:this.state.userName,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            password:this.state.password
        }

        console.log(user);

        axios.post('http://localhost:5000/user/signup', user)
            .then((res) => console.log(res.data));

        this.setState({
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            confirmPassword: ''
        })
        alert("success");
    }

    navigateToSignIn(e) {
        window.location = '/signin';
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.onSignUp}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input className="form-control" type="text" value={this.state.userName} onChange={this.onTextChangeUserName} required></input>
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input className="form-control" type="text" value={this.state.firstName} onChange={this.onTextChangeFirstName} required></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className="form-control" type="text" value={this.state.lastName} onChange={this.onTextChangeLastName}></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.onTextChangePassword} required></input>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input className="form-control" type="password" value={this.state.confirmPassword} onChange={this.onTextChangeConfirmPassword} required></input>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" onClick={this.navigateToSignIn} value="Sign In" />
                    </div>
                </form>
            </div>
        )
    }
}