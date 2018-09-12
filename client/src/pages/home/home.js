import React, { Component } from "react";
import {Input} from "../../components/input"
import {Submit} from "../../components/submitBtn"
import {HomeHeader} from "../../components/homeHeader"
import API from "../../utils/API";
import "./home.css"
import { TimelineLite, CSSPlugin, AttrPlugin, Elastic, Power4, Power1 }  from "gsap/all";
//this line is to avoid tree shaking : https://greensock.com/docs/NPMUsage
const plugins = [ CSSPlugin, AttrPlugin ];

class Home extends Component {

    // loginAnimation = () =>{
    //     var tl = new TimelineLite();
    //     tl.fromTo(".loginDiv", 0.25,{height:0, transformOrigin: "50% 0%"},{height:300})
    // }

    // ShowLogin = () =>{
    //     const form = document.getElementById("loginForm")
    //     form.classList.toggle('invisible');
    //     this.loginAnimation();
    // }
    
    componentDidMount = () =>{
        var tl = new TimelineLite();
        tl.staggerFrom(".img1", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4);
        tl.staggerTo(".img1", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1);
        tl.staggerFrom(".img2", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4, "+=0.3");
    }
    state = {
        username: "",
        password: "",
        auth: false,
        loginMsg: "",
        alerttype: "normal",

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSignIn = event => {
        event.preventDefault();
        if (this.state.username && this.state.password){
            const data= {username: this.state.username, password: this.state.password}
            console.log(data)
            API.authenticate(data)
            .then(result => {
                console.log(result)
                console.log(result.data)
                if(result.data.success){
                    this.setState({
                        loginMsg: "Login Successful",
                        alerttype: "success"
                    })
                    window.location.href = "/dashboard";
                }else{
                    console.log(result.data)
                    this.setState({
                        loginMsg: "Wrong Username or Password",
                        alerttype: "fail"
                    })
                }
            })
        }else{
            this.setState({
                loginMsg: "Please enter your Username/Password",
                alerttype: "normal"
            })
        }
        
    }

    render() {
        return (
            <div className="mycontainer">
                <HomeHeader
                />
                <div className="container">
                    <div id="login" className = "loginDiv collapse">
                        
                            <form>
                            {this.state.loginMsg ? 
                            <div className="alert">
                                <p className= {this.state.alerttype}>{this.state.loginMsg}</p>
                            </div> : ""}
                                <Input
                                    name= "username"
                                    value = {this.state.username}
                                    onChange = {this.handleInputChange}
                                    label = "User name:"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    value = {this.state.password}
                                    onChange = {this.handleInputChange}
                                    label= "Password"
                                />
                                <Submit
                                    type="submit" onClick={this.handleSignIn}
                                />
                            <p>Don't have an account? Sign up <a href="/signup">Here</a></p>
                            </form>
                    </div>
                <div className="row" id="home">
                    
                    <div className="col2 mycol">
                        <div className="intro">
                            {/* <div className="logoDiv">
                                <svg x="0px" y="0px" viewBox="0 0 583 138">
                                    
                                    <g id="icon">
                                        <g className="ceiling" id="red">
                                            <polygon className="ceiling red" points="298.2,56.9 276.3,56.9 288.9,31.2 303,31.2 	"/>
                                            <path className="ceiling red" d="M276.3,56.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                        </g>
                                        <g className="ceiling" id="yellow">
                                            <polygon className="ceiling yellow" points="319.8,56.9 298.2,56.9 303,31.2 319.8,31.2 	"/>
                                            <path className="ceiling yellow" d="M298,56.9c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                        </g>
                                        <g className="ceiling" id="blue">
                                            <polygon className="ceiling blue" points="319.8,56.9 341.4,56.9 334.5,31.2 319.8,31.2 	"/>
                                            <path className="ceiling blue" d="M341.5,56.9c0,6-4.9,10.9-10.9,10.9c-6,0-10.9-4.9-10.9-10.9"/>
                                        </g>
                                        <g className="ceiling" id="green">
                                            <polygon className="ceiling green" points="341.4,56.9 363.3,56.9 349.1,31.2 334.5,31.2 	"/>
                                            <path className="ceiling green" d="M341.5,56.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                        </g>
                                        <g id="shop">
                                            <path className="st4" d="M313.5,75.4h-10.7c-1.3,0-2.3,1-2.3,2.3V96c0,1.3,1,2.3,2.3,2.3h10.7c1.3,0,2.3-1,2.3-2.3V77.7
                                                C315.9,76.4,314.8,75.4,313.5,75.4z"/>
                                            <path className="st5" d="M289.1,31.2h60c0.1,0,0.1,0,0.1,0.1L363,56.6c0.1,0.1,0,0.2-0.1,0.2h-86.3c-0.1,0-0.2-0.1-0.1-0.2l12.5-25.3
                                                C289,31.3,289,31.2,289.1,31.2z"/>
                                            <path className="st5" d="M276.3,56.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                            <path className="st5" d="M319.7,56.9V31.2"/>
                                            <path className="st5" d="M341.4,56.9c0,6-4.9,10.9-10.9,10.9c-6,0-10.9-4.9-10.9-10.9"/>
                                            <path className="st5" d="M341.5,56.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                            <path className="st5" d="M334.5,31.2l7,25.6"/>
                                            <path className="st5" d="M298,56.9c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                            <path className="st5" d="M303,31.2l-5,25.6"/>
                                            <path className="st5" d="M354.5,66.6v29c0,1.5-1.2,2.8-2.8,2.8h-63.8c-1.5,0-2.8-1.2-2.8-2.8V66.4"/>
                                        </g>
                                    </g>
                                    <g id="text">
                                        <text transform="matrix(1 0 0 1 376.1301 98.5954)" className="st6 st7">2eat</text>
                                        <text transform="matrix(1 0 0 1 45.6168 98.5956)" className="st6 st7">Where</text>
                                    </g>
                                </svg>

                            </div> */}
                            <h1>
                                Life is too short to not know where to eat!
                                {/* Don't fight over the place you want to go,<br></br> <span>Play it!</span> */}
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a maximus felis, vitae efficitur arcu. In eleifend lacus vitae urna eleifend viverra. Maecenas eget ullamcorper orci, nec scelerisque mi. Nam congue arcu a varius commodo. Pellentesque vehicula ullamcorper efficitur. In eros erat, viverra at mauris eget, placerat auctor enim. 


                            </p>
                            
                        </div>
                        
                    </div>
                    <div className="col1 mycol">
                        <div id="svgDiv">
                        <svg id="homesvg" viewBox="0 0 1024 768">

                            <circle id="circle" className="blue" cx="714.1" cy="377.6" r="104"/>
                            
                            <image className="img1" href="./img/1-b.png"  transform="matrix(0.3195 0 0 0.3195 249.265 116.3358)">
                            </image>
                            <polygon id="floor" className="red" points="167.4,626.5 421.3,559 729.2,575.2 297,650.8 "/>
                            <image className="img1" href="./img/1-p.png"  transform="matrix(7.640124e-02 0 0 7.640124e-02 763.2389 368.2395)">
                            </image>
                            <image className="img1" href="./img/1-t.png"  transform="matrix(0.2132 0 0 0.2132 195.0435 454.0901)">
                            </image>

                            <image className="img2" href="./img/2-b.png"  transform="matrix(0.2938 0 0 0.2938 264.1174 145.792)">
                            </image>

                            <image className="img2" href="./img/2-p.png"  transform="matrix(0.1054 0 0 0.1054 220 481.5145)">
                            </image>

                            <image  className="img2" href="./img/2-s.png"  transform="matrix(9.469943e-02 0 0 9.469943e-02 683.7705 452.4616)">
                            </image>
                        </svg>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }

}

export default Home;

