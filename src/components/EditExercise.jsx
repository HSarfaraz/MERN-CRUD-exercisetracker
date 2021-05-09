import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default class EditExercise extends Component {

  constructor(props) {
    super();

    this.state = {
      username:"",
      description:"",
      duration:0,
      date: new Date(),
      users: []
    }

    this.onChangeUsername   = this.onChangeUsername.bind(this); 
    this.onChangDescription = this.onChangDescription.bind(this); 
    this.onChangeDuration   = this.onChangeDuration.bind(this); 
    this.onChangeDate       = this.onChangeDate.bind(this); 
    this.onSubmit           = this.onSubmit.bind(this); 
  } //End of constructor function

  componentDidMount(){
    //Get the exercies
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            username    : response.data.username,
            description : response.data.description,
            duration    : response.data.duration,
            date        : new Date(response.data.date),
          })
      })
      .catch(function(error){
        console.log(error)
      })
   
      //Get the users
      axios.get('http://localhost:5000/users/')
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            users: response.data.map(user => user.username)
          })
        }
      })
      .catch(function(error){
        console.log(error)
      })
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value})
  }
  onChangDescription(e) {
    this.setState({ description: e.target.value})
  }
  onChangeDuration(e) {
    this.setState({ duration: e.target.value})
  }
  onChangeDate(date) {
    this.setState({ date: date})
  }

  onSubmit(e) {
    e.preventDefault()

    const exercise = {
      username    : this.state.username,
      description : this.state.description,
      duration    : this.state.duration,
      date        : this.state.date,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = "/";
    //this.props.history.push("/");
  }

  render() {
    return (
       <div className="container" md={12} sm={12}>

        <div className="row h-100 justify-content-center align-items-center">
            <h3 className="font-weight-bold text-uppercase col-sm-12 text-center">Edit Exercise Log</h3>

            <form onSubmit={this.onSubmit} className="col-sm-4">

              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <select className="form-control" value={this.state.username} onChange={this.onChangeUsername} required>
                  {
                    this.state.users.map(function(user){
                      return <option key={user} value={user}>{user}</option>
                    })
                  }
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" value={this.state.description} onChange={this.onChangDescription} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="duration">Duration(mins):</label>
                <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Date(mins):</label><br/>
                <DatePicker selected={this.state.date} className="form-control col-sm-12" onChange={this.onChangeDate} required />
              </div>

              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Edit Exercise Log" />
              </div>

            </form>
        </div>
      </div>
    )
  }
}
