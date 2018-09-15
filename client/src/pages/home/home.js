import React, { Component } from "react";
import {Input} from "../../components/input"
import {Submit} from "../../components/submitBtn"
import {HomeHeader} from "../../components/homeHeader"
import API from "../../utils/API";
import "./home.css"
import { TweenMax, TimelineMax, CSSPlugin, AttrPlugin, Elastic, Power4, Power1 }  from "gsap/all";
// import DrawSVGPlugin  from "../../gsap-bonus/DrawSVGPlugin";
//this line is to avoid tree shaking : https://greensock.com/docs/NPMUsage
const plugins = [ CSSPlugin, AttrPlugin];

class Home extends Component {

    gitterAnimation = (el,dur,deg1,deg2) =>{
        var gitter = new TimelineMax({repeat: 20})
        gitter.to(el, dur, {rotation:deg1, transformOrigin: "50% 50%"})
        .to(el, dur, {rotation:deg2, transformOrigin: "50% 50%"}, "+=0.2")
    }
    
    componentDidMount = () =>{
        
        let path = document.querySelector(".rest-line")
        let l = path.getTotalLength();
        TweenMax.set(path,{strokeDasharray:l});
        let tl = new TimelineMax();
        tl.staggerFrom(".img1", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4);
        // tl.from(".rest-line", 1, {DrawSVGPlugin:"0% 0%"});
        // tl.from(path,0.1,{opacity:0})
        // tl.set(path,{strokeDasharray:0});
        tl.fromTo(path,0.5,{strokeDashoffset:l}, {strokeDashoffset: 0}, "-=1.5")
        tl.staggerFrom(".flwrs", 1, {scale:0, transformOrigin: "50% 50%", ease: Elastic.easeOut}, 0.04, "-=1")
        this.gitterAnimation("#img1-b", 0.2, 1, 0)
        this.gitterAnimation("#img1-p", 0.1, 3, -3)
        this.gitterAnimation("#img1-t", 0.15, 2, -2)
        tl.staggerTo(".img1", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1, "+=1");
        tl.staggerTo(".flwrs", 0.5, {scale:0, transformOrigin: "50% 50%", ease: Power1.easeOut}, 0.04, "-=1")
        tl.to(path,0.5,{strokeDashoffset:l}, "-=0.8")
        tl.staggerFrom(".img2", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4, "+=0.3");
        this.gitterAnimation("#img2-b", 0.4, 0, 1)
        this.gitterAnimation("#img2-p", 0.2, 1, 1)
        this.gitterAnimation("#img2-s", 0.08, 8, -5)
        tl.staggerTo(".img2", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1, "+=2");
        tl.staggerFrom(".img3", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4, "+=0.3");
        this.gitterAnimation("#img3-b", 0.3, 0.2, 0)
        this.gitterAnimation("#img3-p", 0.1, -1, 1)
        this.gitterAnimation("#img3-t", 0.2, 0.5, -1)

    }
    state = {
        username: "kiki",
        password: "M1234m",
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
            <div id="content">
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
                            <div className="logoDiv">
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

                            </div>
                            <h1>
                                Life is too short to be indecisive!
                            </h1>
                            <p>
                            Where2eat breaks the restaurant selection process into quick and simple one-on-one comparisons. It's a gamified experience that is designed to help YOU choose restaurants quickly! 
                            </p>
                            
                        </div>
                        
                    </div>
                    <div className="col1 mycol">
                        <div id="svgDiv">
                        <svg id="homesvg" viewBox="0 0 1024 768">

                            <g id="img1-graphs">
                                <circle className="flwrs" cx="606.7" cy="404.5" r="8.1"/>
                                <circle className="flwrs" cx="653.1" cy="406.1" r="11.5"/>
                                <circle className="flwrs" cx="580.7" cy="410.4" r="16.7"/>
                                <circle className="flwrs" cx="630.5" cy="403.7" r="14.2"/>
                                <circle className="flwrs" cx="696.3" cy="405.9" r="11.9"/>
                                <circle className="flwrs" cx="724" cy="405.2" r="10"/>
                                <circle className="flwrs" cx="424.5" cy="401.3" r="10.3"/>
                                <circle className="flwrs" cx="393.6" cy="406" r="13.1"/>
                                <circle className="flwrs" cx="362.3" cy="406.4" r="13.1"/>
                                <circle className="flwrs" cx="331.4" cy="402.8" r="15.8"/>
                                <circle className="flwrs" cx="306.7" cy="398.6" r="15.5"/>
                                <circle className="flwrs" cx="278.5" cy="401.3" r="12.1"/>
                                <path className="rest-line" d="M731.5,185.8c-88.7,82.5-424.6,85.5-429.6,23.6c-2.9-36.2,70.7-50.8,158.7-54.8s210.7,0.9,220.8,38.3c6.5,24.2-57.1,75.5-179.2,80.8"/>
                            </g>
                            
                            <image className="img1" id="img1-b" href="./img/1-b.png"  transform="matrix(0.3195 0 0 0.3195 249.265 116.3358)">
                            </image>
                            <image className="img1" id="img1-p" href="./img/1-p.png"  transform="matrix(7.640124e-02 0 0 7.640124e-02 763.2389 368.2395)">
                            </image>
                            <image className="img1" id="img1-t" href="./img/1-t.png"  transform="matrix(0.2132 0 0 0.2132 195.0435 454.0901)">
                            </image>

                            <image id="img2-b" className="img2" href="./img/2-b.png"  transform="matrix(0.2938 0 0 0.2938 264.1174 145.792)">
                            </image>

                            <image id="img2-p" className="img2" href="./img/2-p.png"  transform="matrix(0.1054 0 0 0.1054 220 481.5145)">
                            </image>

                            <image id="img2-s" className="img2" href="./img/2-s.png"  transform="matrix(9.469943e-02 0 0 9.469943e-02 683.7705 452.4616)">
                            </image>

                            <image id="img3-b" className="img3" href="./img/3-b.png"  transform="matrix(0.3095 0 0 0.3095 256.5281 78)">
                            </image>

                            <image id="img3-t" className="img3" href="./img/3-t.png"  transform="matrix(0.2314 0 0 0.2314 581.7001 471.1018)">
                            </image>

                            <image id="img3-p" className="img3" href="./img/t-p.png"  transform="matrix(0.1047 0 0 0.1047 203.0752 385.3544)">
                            </image>
                        </svg>
                        </div>
                    </div>
                    
                </div>
                </div>
                </div>
                <div className="footer">
                    <img id="bg-img" src="./img/bg-2.png"/>
                </div>
            </div>
        )
    }

}

export default Home;

