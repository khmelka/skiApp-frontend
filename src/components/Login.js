import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {

    state={
        
        email: "",
        password: "",
        emailError: "",
        passwordError: "",

    }

    handleUserInput = event => {
        console.log("hi", event.target.name)
        this.setState ({
            
            [event.target.name]: event.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log(this.state)
       
        

    
        if (this.state.email === ""){
            
            this.setState({
                emailError: "Email is required"
            })
        }

        if (this.state.password === ""){
            console.log(this.state)
            
            this.setState({
                passwordError: "Password is required"
            })
        }

        else {

            this.setState({
                
                email: "",
                password: "",
                emailError: "",               
                passwordError: "",
                
            })

            axios 
            .post("http://localhost:3000/users", this.state)
        }

            
     
    }


    render() {
        const {emailError, passwordError} = this.state
        return (
        
          

                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        <div className="col-md-4 col-md-4 col-md-12">
                         <form className="form-container" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="mainname">
                                <h1 className="name">Welcome to SKi Buddy!</h1>
                                </div>
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {emailError}
                                    </div>
                                 </div>
                                 <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                             {passwordError}
                                         </div>
                                     </div>
                                
                                <button type="submit" className="btn btn-info" id="but1"><Link to="/home">Login</Link></button>
                                <button type="button" className="btn btn-success btn-success"id="but2"><Link to="/">Signup</Link></button>

                                </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                  </div>
                
        
        )
    }
}

