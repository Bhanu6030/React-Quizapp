import React, { Component } from "react";
import '../../src/App.css';
import fire from '../config/fire';


class Login extends Component 
{
  constructor(props)
  {
    
    super(props);
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
      email:"",
      password:""
    }
  }

  login(e)
  {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u)
    }).catch((err)=>{
      console.log(err);
    })
  }
    signup(e)
    {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
      }).catch((err)=>{
        console.log(err);
      })
    }
  
handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}
render()
{
  return (
    <div className="last">
      <div>
    <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/138355b9-0f99-406b-8943-b4437c0e5bcd?w=200&h=200"></img>
    </div>
    <div className="login">
     <span className="loginheading">Login</span>
      <form className="loginform">
    {/* <label className="labels"> Name:</label>
      <input className="inputs"
        type="text" 
       placeholder="Enter your name.."
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}

    <label className="labels"> Email:</label>
      <input className="inputs"
        type="text" 
        id="email"
        name="email"
       placeholder="Enter your email.."
        onChange={this.handleChange}
        value={this.state.email}
      />
  
    <label className="labels"> Password:</label>
      <input className="inputs"
        type="password" 
        id="password"
        name="password"
        placeholder="Enter your password.."
        onChange={this.handleChange}
        value={this.state.password}
      />
 <button onClick={this.login} className="loginButton">Login</button>
 <div>
 <button onClick={this.signup} className="innerregister">Signup</button>
 </div>

  </form>
    </div>
    </div>
  );
}    
  }
  
  export default Login;