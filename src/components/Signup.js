import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'


export default class SignUp extends Component {

    state={
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",

    }

    handleUserInput = event => {
        console.log("hi", event.target.name)
        this.setState ({
            
            [event.target.name]: event.target.value
        })
       
    }

    handleSubmit = event => {
        event.preventDefault()
       
        if (this.state.name === ""){

            this.setState({
            nameError: "Name is required"
           })
        }
           

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
                name: "",
                email: "",
                password: "",
                nameError: "",
                emailError: "",
                passwordError: "",
                
            })

            axios 
            .post("http://localhost:3000/users", this.state)
        }

            
    }



    render() {
        const {nameError, emailError, passwordError} = this.state
        return (
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        <div className="col-md-4 col-md-4 col-md-12">
                            <form className="form-container" onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                <label>Name</label>
                                    <input type="text" className="form-control" placeholder="First name" name="name" value={this.state.name} onChange={this.handleUserInput}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {nameError}
                                    </div>
                                    </div>
                                    
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {emailError}
                                    </div>
                                    </div>
                                    
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {passwordError}
                                    </div>
                                    </div>
                                   
                                
                                
                                    <button type="submit" className="btn btn-success btn-success"id="but1"><Link to="/home">SignUp</Link></button>
                                    <button type="submit" className="btn btn-success btn-success"id="but2"><Link to="/login">Login</Link></button>

                                </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                    </div>
        
        )
    }
}

