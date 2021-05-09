import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"


const Exercise = props => (
  <tr>
    <th>{props.exercise.username}</th>
    <th>{props.exercise.description}</th>
    <th>{props.exercise.duration}</th>
    <th>{props.exercise.date.substring(0,10)}</th>
    <th>
      <button className="btn btn-secondary">
        <Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link>
      </button>  |  <button className="btn btn-danger"
        onClick={() => props.deleteExercise(props.exercise._id)}>Delete
      </button>  

    </th>
  </tr>
)

export default class ExerciseList extends Component {

  constructor(props) {
    super();

    this.state = {
      exercises: []
    }

    this.deleteExercise   = this.deleteExercise.bind(this); 
  } //End of constructor function

  componentDidMount(){
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
          this.setState({
            exercises: response.data
          })
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
    .then(response => console.log(response.data))

    this.setState({
      exercises: this.state.exercises.filter(el => el.id !== id)
    })

    window.location = "/"
  }
  

  exercisesList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="font-weight-bold text-uppercase">Logged Exercises</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.exercisesList()}
          </tbody>
        </table>
        
      </div>
    )
  }
}

