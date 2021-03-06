import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBucketList extends Component {

    constructor(props) {
        super(props);

        this.onTextChangeUserName = this.onTextChangeUserName.bind(this);
        this.onTextChangePassword = this.onTextChangePassword.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.navigateToSignUp = this.navigateToSignUp.bind(this);
        
        this.state = {
            userName: '',
            password: '',
            userId: ''
        }
    }

    onTextChangeUserName(e) {
        this.setState({
            userName:e.target.value
        })
    }

    onTextChangePassword(e) {
        this.setState({
            password:e.target.value
        })
    }

    onSignIn(e) {
        e.preventDefault();

        (async () => {
            const user = {
                userName:this.state.userName,
                password:this.state.password
            }

            const response = await axios.post('http://localhost:5000/user/signin', user);
            this.setState({
                userId: response.data[0]._id
            })
            this.props.history.push({ 
                pathname: '/view',
                state: {
                    userId: response.data[0]._id,
                    firstName: response.data[0].firstName
                }
            });
        })();
        
        this.setState({
            userName: '',
            password: ''
        })
        
    }

    navigateToSignUp(e) {
        window.location = '/signup';
    }

    render() {
        return (
            <div>
                <h1>Sign in</h1>
                <form onSubmit={this.onSignIn}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input className="form-control" type="text" value={this.state.userName} onChange={this.onTextChangeUserName} required></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.onTextChangePassword} required></input>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Sign In" />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" onClick={this.navigateToSignUp} value="Sign Up" />
                    </div>
                </form>
            </div>
        )
    }
}