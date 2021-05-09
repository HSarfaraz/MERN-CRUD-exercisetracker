import React, { Component } from 'react';
import axios from "axios";

export default class CreateUser extends Component {

  constructor(props) {
    super();

    this.state = {
      username:""
    }
    //this.callRef = React.createRef(); 
     //this.nameRef = React.useRef(null); 

    this.onChangeUsername   = this.onChangeUsername.bind(this); 
    
    this.onSubmit           = this.onSubmit.bind(this); 
  } //End of constructor function

  onChangeUsername(e) {
    this.setState({ username: e.target.value})
  }
  
  onSubmit(e) {
    e.preventDefault()

    const user = {
      username    : this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = "/";
    //this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">

         <div className="row h-100 justify-content-center align-items-center">
            
            <h3 className="font-weight-bold text-uppercase text-center col-sm-12 ">Create New User</h3>

            <form onSubmit={this.onSubmit} className="col-sm-4">

              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
              </div>
              
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Create User" />
              </div>

            </form>

        </div>
        
      </div>
    )
  }
}
