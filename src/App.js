import React from 'react';
import { BrowserRouter, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

import ExercisesList from "./components/ExercisesList"
import EditExercise from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"

import CreateUser from "./components/CreateUser"


import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /><br />
      <Route exact path="/" component={ExercisesList} />
      <Route exact path="/edit/:id" component={EditExercise} />
      <Route exact path="/create" component={CreateExercise} />
      <Route exact path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
