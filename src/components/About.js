import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
      
    togglediv=()=>{
     const{show}=this.state
     this.setState({
         show:!show 
     })
    }
    render() {
        return (
            <div className="ButtonToogle">
                <button className="b-1 btn btn-primary mt-5" onClick={this.togglediv}>AboutUs</button>
                {this.state.show && <Box/>}
            </div>
        )
    }
}

 class Box extends Component {
    render() {
        return (
            <div>
            <div className="about_info">
                <h2> About Us Page</h2>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their 
                </div>    
            </div>
        )
    }
}



export default About