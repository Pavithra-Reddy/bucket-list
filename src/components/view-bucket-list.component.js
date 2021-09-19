import React, { Component } from 'react';

export default class CreateBucketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:this.props.location.state.userId,
            firstName:this.props.location.state.firstName
        }
        this.navigateToCreate = this.navigateToCreate.bind(this);
    }

    navigateToCreate(e) {
        e.preventDefault();
        this.props.history.push({ 
            pathname: '/create',
            state: {
                userId: this.state.userId,
                firstName: this.state.firstName
            }
        });
    }
    render() {
        return (
            <div>
                <input className="btn btn-primary" onClick={this.navigateToCreate} value="Create" />
                <h1>Welcome {this.state.firstName}</h1> 
            </div>
        )
    }
}