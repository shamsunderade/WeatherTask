import React, { Component } from 'react'


import { Link, Redirect } from "react-router-dom"



import Main_Api_Container from './Main_Api_Container'


export default class Home_page extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/' />
        }
        return (
            
            
            <div className="bg-img1">
                <div>
                <div className="logotbtn1">
                <Link to="/logout" className="btn btn-danger " >  Logout</Link>
                </div>
                <Main_Api_Container/>
                </div>
            </div>
        )
    }
}
