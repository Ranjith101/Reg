import React, { Component } from 'react'

export default class Details extends Component {
  constructor(props){
    super(props)
    this.state ={
      userDetails:[]
    }
  }

  componentDidMount(){
    let getDetails = this.props.location.state.allValue
    this.setState({userDetails:getDetails})
  }
  render() {
    return (
      <div>
          <span>Name</span>
          <span>    :    {this.state.userDetails.fname}</span><br/>
          <span>DOB</span> 
          <span>     :    {this.state.userDetails.dob} </span><br/>
          <span>Email</span>
          <span>     :    {this.state.userDetails.email} </span><br/>
          <span>Message</span>
          <span>     :    {this.state.userDetails.message} </span><br/>
          <span>Mobile Number</span>
          <span>     :    {this.state.userDetails.mobile} </span><br/>
          <span>State</span>
          <span>     :    {this.state.userDetails.city} </span><br/>
          <span>District</span>
          <span>     :    {this.state.userDetails.district} </span><br/>
          <span>Gender</span>
          <span>     :    {this.state.userDetails.gender} </span><br/>
      </div>
    )
  }
}
