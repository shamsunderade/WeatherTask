import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = false
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn
        }

        this.onchangehandler = this.onchangehandler.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    onchangehandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitform(e) {
        e.preventDefault()
        const { username, password } = this.state
        if (username === "shamsunder@gmail.com" && password === "12345") {
            localStorage.setItem("token", `username:-${this.state.username} password:-${this.state.password}`)
            this.setState({
                loggedIn: true
            })

        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/homepage" />
        }
        return (
            
            <div className="container b_g_img" >
                <div className="row w-100 d-flex justify-content-center align-items-center main-div "  >
                    <div className="col-12 col-lg-5 col-md col-xxl-5">
                        <div className="card py-3 px-2">
                            
                            
                            <div className="division">
                                <div className="row">
                                    <div className="col-6 mx-auto mb-4" >
                                        <span className="main-heading">Login form</span>
                                    </div>

                                </div>
                                <form className="myform" onSubmit={this.submitform}>
                                    <div class="mb-3">
                                       
                                        <input type="email" class="form-control" id="exampleFormControlInput1" value={this.state.username} name="username" placeholder="username" onChange={this.onchangehandler} />
                                    </div>
                                    <div class="mb-3">
                                        
                                        <input type="password" class="form-control" id="exampleFormControlInput1" value={this.state.password} name="password" placeholder="password" onChange={this.onchangehandler} />
                                    </div>
                                    {/* <div className="col-md-6 col-12">
                                        
                                    </div> */}
                                    <div className="my-3">
                                        <input type="submit" className="btn btn-block btn-primary btn-lg"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
