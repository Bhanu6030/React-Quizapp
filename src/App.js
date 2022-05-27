
import React, { Component } from 'react';
import QuizMan from './components/QuizMain';
import './App.css';
import fire from './config/fire';
import Login from './components/Login';
import Logout from './components/Logout';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount()
{
  this.authListener();
}
  authListener()
  {
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
        console.log(user);
        
      }
      else{
        this.setState({user : null})
      }
    })
  }
  render()
  {
    return (
      <div className="App">
        {this.state.user ? (<QuizMan />):(<Login />)}
      </div>
    );
  }
  
}

export default App;
