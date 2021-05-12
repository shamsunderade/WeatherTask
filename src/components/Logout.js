import React, { Component } from 'react'
import {  Link } from "react-router-dom"
import THANK from '../images/thank_you.jpg';
export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")

    }

    render() {
        return (
            <div>
                <div className="btn_div">
                    <Link className="btn_b btn btn-primary" to="/" >Login Again</Link>
                </div>
                <img src={THANK} className="log_img" alt="thank you img" />

            </div>
        )
    }
}
