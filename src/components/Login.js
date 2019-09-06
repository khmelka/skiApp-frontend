import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {

    state={
        
        email: "",
        password: ""
        // first_nameError: "",
        // last_nameError: "",
        // emailError: "",
        // passwordError: "",

    }

    handleChange = event => {
        console.log("hi", event.target.name)
        this.setState ({
            
            [event.target.name]: event.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log(this.state)
        axios 
            .post("http://localhost:3000/users", this.state)
        }

    //     if (this.state.first_name === ""){

    //         this.setState({
    //         first_nameError: "First name is required"
    //        })
    //     }
           
    //     if (this.state.last_name === ""){

    //         this.setState({
    //         last_nameError: "Last name is required"
    //        })
    //     }

    //     if (this.state.email === ""){
            
    //         this.setState({
    //             emailError: "Email is required"
    //         })
    //     }

    //     if (this.state.password === ""){
    //         console.log(this.state)
            
    //         this.setState({
    //             passwordError: "Email is required"
    //         })
    //     }

    //     else {
    //         axios 
    //         .post("http://localhost:3000/users", this.state)
    //     }

            
    // }



    render() {
        return (
                <div className="signinMainContainer">
                    <div className="row">
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        <div className="col-md-4 col-md-4 col-md-12">
                            <form className="form-container" onSubmit={this.handleSubmit}>

                              
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                
                                <button type="submit" className="btn btn-success btn-success" id="but1"><Link to="/home">Login</Link></button>
                                <button type="submit" className="btn btn-success btn-success"id="but2"><Link to="/">Signup</Link></button>

                                </form>


                        </div>
                        <div className="col-md-4 col-md-4 col-md-12"></div>
                        </div>
                    </div>
        
        )
    }
}

