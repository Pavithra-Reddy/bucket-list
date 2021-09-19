import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateBucketList extends Component {
    constructor(props) {
        super(props);

        this.onTextChangeAction = this.onTextChangeAction.bind(this);
        this.onTextChangeCountry = this.onTextChangeCountry.bind(this);
        this.onTextChangeImageUrl = this.onTextChangeImageUrl.bind(this);
        this.onTextChangeFulfilledDate = this.onTextChangeFulfilledDate.bind(this);
        this.onTextChangeIsComplete = this.onTextChangeIsComplete.bind(this);
        this.onTextChangeUserId = this.onTextChangeUserId.bind(this);
        this.createBucketList = this.createBucketList.bind(this);
        this.navigateToView = this.navigateToView.bind(this);

        this.state = {
            action:'',
            country:'',
            imageUrl:'',
            fulfilledDate:'',
            isComplete:false,
            userId:this.props.location.state.userId,
            firstName:this.props.location.state.firstName
        }
    }

    onTextChangeAction(e) {
        this.setState({
            action:e.target.value
        })
    }

    onTextChangeCountry(e) {
        this.setState({
            country:e.target.value
        })
    }

    onTextChangeImageUrl(e) {
        this.setState({
            imageUrl:e.target.value
        })
    }

    onTextChangeFulfilledDate(e) {
        this.setState({
            fulfilledDate:e
        })
    }

    onTextChangeIsComplete(e) {
        this.setState({
            isComplete:e.target.checked
        })
    }

    onTextChangeUserId(e) {
        this.setState({
            userId:e.target.value
        })
    }

    createBucketList(e) {
        e.preventDefault();

        const bucketlistitem = {
            action:this.state.action,
            country:this.state.country,
            imageUrl:this.state.imageUrl,
            fulfilledDate:this.state.fulfilledDate,
            isComplete:this.state.isComplete,
            userId:this.state.userId
        };

        axios.post('http://localhost:5000/bucketlist/add', bucketlistitem)
            .then((res) => console.log(res.data));

        this.setState({
            action:'',
            country:'',
            imageUrl:'',
            fulfilledDate:'',
            isComplete:''
        });
        alert("success");
    }

    navigateToView(e) {
        this.props.history.push({ 
            pathname: '/view',
            state: {
                userId: this.state.userId,
                firstName: this.state.firstName
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Create Bucket List Action</h1>
                <form onSubmit={this.createBucketList}>
                    <div className="form-group">
                        <label>Action:</label>
                        <input className="form-control" type="text" value={this.state.action} onChange={this.onTextChangeAction} required></input>
                    </div>
                    <div className="form-group">
                        <label>Country:</label>
                        <input className="form-control" type="text" value={this.state.country} onChange={this.onTextChangeCountry} required></input>
                    </div>
                    <div className="form-group">
                        <label>ImageUrl:</label>
                        <input className="form-control" type="text" value={this.state.imageUrl} onChange={this.onTextChangeImageUrl}></input>
                    </div>
                    <div className="form-group">
                        <label>Is Complete? : </label>
                        <input className="form-check-input" type="checkbox" defaultChecked={this.state.isComplete} onChange={this.onTextChangeIsComplete}></input>
                    </div>
                    <div className="form-group">
                        <label>Fulfilled Date:</label>
                        <DatePicker className="form-control" 
                            selected={this.state.fulfilledDate}
                            onChange={this.onTextChangeFulfilledDate}
                        />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Create" />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" onClick={this.navigateToView} value="Back" />
                    </div>
                </form>
            </div>
        )
    }
}