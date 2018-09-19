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
        var gitter = new TimelineMax({repeat: -1})
        gitter.to(el, dur, {rotation:deg1, transformOrigin: "50% 50%"})
        .to(el, dur, {rotation:deg2, transformOrigin: "50% 50%"}, "+=0.2")
    }
    
    componentDidMount = () =>{
        setTimeout(()=>{
            if(document.querySelector("#svgDiv")){
                document.querySelector("#svgDiv").classList.remove("invisible")
                let restPath = document.querySelector(".rest-line")
                let restL = restPath.getTotalLength();
                TweenMax.set(restPath,{strokeDasharray:restL});
                let arrPath1 = document.querySelector("#arrow1")
                let arr1L = arrPath1.getTotalLength() + 4;
                TweenMax.set(arrPath1,{strokeDasharray:arr1L});
                let arrPath2 = document.querySelector("#arrow2")
                let arr2L = arrPath2.getTotalLength() + 4;
                TweenMax.set(arrPath2,{strokeDasharray:arr2L});
                
                let tl = new TimelineMax();
                tl.staggerFrom(".img1", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4);
        
                tl.fromTo(restPath,0.5,{strokeDashoffset:restL, ease:Power4.easeOut}, {strokeDashoffset: 0}, "-=1.5")
                tl.staggerFrom(".flwrs", 1, {scale:0, transformOrigin: "50% 50%", ease: Elastic.easeOut}, 0.04, "-=1")
                this.gitterAnimation(restPath, 0.2, 0.5, -0.5)
                this.gitterAnimation("#img1-p", 0.1, 1, -1)
                this.gitterAnimation("#img1-t", 0.15, 1, -2)
                tl.staggerTo(".img1", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1, "+=1");
                tl.staggerTo(".flwrs", 0.5, {scale:0, transformOrigin: "50% 50%", ease: Power1.easeOut}, 0.04, "-=1")
                tl.to(restPath,0.5,{strokeDashoffset:restL}, "-=0.8")
                tl.staggerFrom(".img2", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4, "+=0.3");
                this.gitterAnimation("#img2-p", 0.2, 1, 1)
                this.gitterAnimation("#img2-s", 0.1, 3, -3)
                tl.fromTo(arrPath1,0.25,{strokeDashoffset:arr1L, ease:Power1.easeOut}, {strokeDashoffset: 0}, "-=1.5")
                tl.fromTo(arrPath2,0.15,{strokeDashoffset:arr2L, ease:Power1.easeOut}, {strokeDashoffset: 0}, "-=1.2")
                tl.staggerFrom(".bar-path", 0.8, {scale:0, transformOrigin: "50% 50%", ease:Elastic.easeOut}, 0.1, "-=1");
                tl.from(".bar-circle", 0.5, {scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut})
                tl.staggerTo(".img2", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1, "+=1.1");
                tl.to(arrPath1,0.2,{strokeDashoffset:arr1L}, "-=0.8")
                tl.to(arrPath2,0.2,{strokeDashoffset:arr2L}, "-=0.8")
                tl.staggerTo(".bar-path", 0.8, {scale:0, transformOrigin: "50% 50%", ease:Elastic.easeIn}, 0.1, "-=1");
                tl.to(".bar-circle", 0.5, {scale:0, transformOrigin: "50% 50%", ease: Elastic.easeIn},"-=1")
        
        
                tl.staggerFrom(".img3", 1, {scale:0, x:-400, transformOrigin: "50% 50%", ease:Power4.easeOut}, 0.4, "+=0.3");
                tl.from(".cafe-sign", 0.5, {scale:0, transformOrigin: "50% 50%", ease:Elastic.easeOut}, "-=1")
                tl.from(".cups", 0.2, {scale:0, transformOrigin: "50% 50%"})
                tl.staggerTo(".img3", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn}, 0.1, "+=1.3");
                tl.to(".cafe-sign", 0.3, {scale:0, transformOrigin: "50% 50%", ease:Power1.easeIn});
        
                tl.to(".cups", 0.5, {rotation:180, transformOrigin: "50% 50%", ease:Elastic.easeOut}, "-=0.5")
                tl.from(".handle", 0.2, {scale:0, transformOrigin: "50% 50%"})
                tl.to("#mug1", 0.5, {x:70, transformOrigin: "50% 50%", rotation: 10})
                tl.to("#mug2", 0.5, {x:-70, transformOrigin: "50% 50%", rotation: -7}, "-=0.5")
                tl.to("#mug1", 0.5, { x:60, y: -30, transformOrigin: "50% 50%", rotation: 0})
                tl.to("#mug2", 0.5, {x:-65, y: -35, transformOrigin: "50% 50%", rotation: 0}, "-=0.5")
                tl.to("#mug1", 0.3, {x:-100, scale: 0, transformOrigin: "50% 50%", rotation: 360}, "+=0.3")
                tl.to("#mug2", 0.3, {x:100, scale: 0, transformOrigin: "50% 50%", rotation: 360}, "-=0.3")
                tl.fromTo("#thelogo", 0.3, {scale: 0, transformOrigin: "50% 50%", ease:Power1.easeIn},{scale:0.7, y:-160}, "-=0.4")
                tl.fromTo("#startBtn", 0.3, {scale: 0, transformOrigin: "50% 50%", ease:Power1.easeIn},{scale:0.9, y:-80}, "-=0.4")
                this.gitterAnimation(".cafe-sign", 0.2, 1, -1)
                this.gitterAnimation("#img3-p", 0.1, -1, 1)
                this.gitterAnimation("#img3-t", 0.2, 0.5, -1)
            }
            
        }, 500)
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
                                Life is too short to be indecisive!
                            </h1>
                            <p>
                            Where2eat breaks the restaurant selection process into quick and simple one-on-one comparisons. It's a gamified experience that is designed to help YOU choose restaurants quickly! 
                            </p>
                            
                        </div>
                        
                    </div>
                    <div className="col1 mycol">
                        <div id="svgDiv" className="invisible">
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


                            <ellipse className="bar-circle" cx="724.5" cy="564.1" rx="119" ry="30.9"/>

                            <image id="img2-b" className="img2" href="./img/2-b.png"  transform="matrix(0.2938 0 0 0.2938 264.1174 145.792)">
                            </image>

                            <image id="img2-p" className="img2" href="./img/2-p.png"  transform="matrix(0.1054 0 0 0.1054 220 481.5145)">
                            </image>

                            <image id="img2-s" className="img2" href="./img/2-s.png"  transform="matrix(9.469943e-02 0 0 9.469943e-02 683.7705 452.4616)">
                            </image>

                            <path id= "arrow1" className="arrow" d="M309.4,84c71.3-5,107.7,7.3,145.2,59.9"/>
                            <path id= "arrow2" className="arrow" d="M459.3,111.1c2.4,25.2-1.1,40.4-1.1,40.4s-18-9.4-39.7-10.6"/>
                            <path className="bar-path" d="M451.1,210.4c0,0-0.7-27.4-0.4-27.5c1.2-0.7,11.8-3.7,12.6,3.9s-9,7.1-9.5,7.2s14.2-1.1,15.4,7.6
                                s-12.6,10.6-17.1,5.5"/>
                            <path className="bar-path" d="M482.6,209.8L492,179c0,0,10.8,21.2,14.1,29c0.3,0.8-1.8-4.3-2.8-6.1c-2.5-4.5-11.1-6.2-18.8-4"/>
                            <path className="bar-path" d="M523.3,208.7c-0.7-4.2-1.5-24.8-2.7-28c0,0,14.7-2.3,14.7,8.8s-10.2,8.3-10.2,8.3s6.3,0.9,11,5.8
                                c5.4,5.6,10.7,6.2,12.4,4.2"/>


                            <g id="img3-graphics">
                                <g id="mug1">
                                    <path className="window cups" d="M300.5,471.6c0,0-1.8-52.7-1.8-113.4s51.7-71.6,77.5-65.6c25.8,6,51.7,9.9,57.2,73.6
                                        c5.5,63.6,1.8,101.6,1.8,101.6L300.5,471.6z"/>
                                    <path className="window handle" d="M306.6,417.5c-2.3-0.4-4.6-0.8-6.7-1.1c-27.6-4.6-45.9-7.6-45.9-46.8c0-18.5,3.4-29.9,11.1-37
                                    c9.3-8.6,23-9.4,42-7.9l-1.3,16.9c-16.7-1.3-25.1-0.3-29.2,3.5c-3.8,3.5-5.7,11.6-5.7,24.6c0,16,3.2,20.6,6,22.9
                                    c4.6,3.6,13.4,5.1,25.6,7.1c2.2,0.4,4.4,0.7,6.8,1.1L306.6,417.5z"/>
                                </g>
                                <g id="mug2">
                                    <path className="window cups" d="M576.5,471.6c0,0-1.8-52.7-1.8-113.4s51.7-71.6,77.5-65.6c25.8,6,51.7,9.9,57.2,73.6s1.8,97.6,1.8,97.6
                                        L576.5,471.6z"/>
                                    
                                    <path className="window handle" d="M707.1,412.5l-2.9-16.8c2.4-0.4,4.6-0.8,6.8-1.1c12.2-2,21.1-3.5,25.6-7.1c2.8-2.2,6-6.9,6-22.9
                                        c0-13-1.9-21-5.7-24.6c-4.1-3.8-12.5-4.8-29.2-3.5l-1.3-16.9c19-1.5,32.7-0.7,42,7.9c7.7,7.1,11.1,18.5,11.1,37
                                        c0,39.2-18.2,42.2-45.9,46.8C711.7,411.8,709.4,412.1,707.1,412.5z"/>
                                </g>
                                <path className="cafe-sign" d="M376.7,138.5c0,0,7.9-28.6,19.9-28.6s59.4-2.3,59.4-2.3s-0.8-15.8,12.8-19.2c13.5-3.4,25.9-8.3,26.7-16.5
                                    c0,0,4.9,6.4,16.2,8.6s27.8,12.8,28.6,21.8c0,0,27.4,3.4,50,1.9c22.5-1.5,32.3,31.9,40.2,33.1c0,0-7.5,7.1-14.7,15
                                    c-7.1,7.9-10.1,12.8-28.2,13.5c-18,0.8-18,0.8-18,0.8s-149.9-1.5-165.4-1.5S387.9,142.6,376.7,138.5z"/>
                                
                                
                            </g>

                            <g id="thelogo">
                                <g id="red">
                                    <polygon className="ceiling red" points="516,291.1 494.2,291.1 506.8,265.5 520.9,265.5 	"/>
                                    <path className="ceiling red" d="M494.2,291.1c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                </g>
                                <g id="yellow">
                                    <polygon className="ceiling yellow" points="537.7,291.1 516,291.1 520.9,265.5 537.7,265.5 	"/>
                                    <path className="ceiling yellow" d="M515.9,291.1c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                </g>
                                <g id="blue">
                                    <polygon className="ceiling blue" points="537.7,291.1 559.3,291.1 552.3,265.5 537.7,265.5 	"/>
                                    <path className="ceiling blue" d="M559.3,291.1c0,6-4.9,10.9-10.9,10.9c-6,0-10.9-4.9-10.9-10.9"/>
                                </g>
                                <g id="green">
                                    <polygon className="ceiling green" points="559.3,291.1 581.2,291.1 567,265.5 552.3,265.5 	"/>
                                    <path className="ceiling green" d="M559.3,291.1c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                </g>
                                <g id="shop">
                                    <path className="st4" d="M531.4,309.6h-10.7c-1.3,0-2.3,1-2.3,2.3v18.3c0,1.3,1,2.3,2.3,2.3h10.7c1.3,0,2.3-1,2.3-2.3V312
                                        C533.7,310.7,532.7,309.6,531.4,309.6z"/>
                                    <path className="st5" d="M506.9,265.5h60c0.1,0,0.1,0,0.1,0.1l13.8,25.3c0.1,0.1,0,0.2-0.1,0.2h-86.3c-0.1,0-0.2-0.1-0.1-0.2l12.5-25.3
                                        C506.8,265.5,506.9,265.5,506.9,265.5z"/>
                                    <path className="st5" d="M494.2,291.1c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9"/>
                                    <line className="st5" x1="537.6" y1="291.1" x2="537.6" y2="265.5"/>
                                    <path className="st5" d="M559.3,291.1c0,6-4.9,10.9-10.9,10.9c-6,0-10.9-4.9-10.9-10.9"/>
                                    <path className="st5" d="M559.3,291.1c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                    <line className="st5" x1="552.3" y1="265.5" x2="559.3" y2="291.1"/>
                                    <path className="st5" d="M515.9,291.1c0,6,4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9"/>
                                    <line className="st5" x1="520.9" y1="265.5" x2="515.9" y2="291.1"/>
                                    <path className="st5" d="M572.4,300.8v29c0,1.5-1.2,2.8-2.8,2.8h-63.8c-1.5,0-2.8-1.2-2.8-2.8v-29.2"/>
                                </g>
                                <g id="text">
                                    <text transform="matrix(1 0 0 1 594.99 332.8337)" className="st6 st7">2eat</text>
                                    <text transform="matrix(1 0 0 1 254.4767 332.8339)" className="st6 st7">Where</text>
                                </g>
                            </g>
                            <a href="/signup">
                            <g id="startBtn">
                                <polygon className="start-bg" points="391.5,423.9 390.8,333 652.2,327.5 654,427.1 	"/>
                                <g id= "start-text">
                                    <path className="start" d="M551.5,359c0-1.4,0.6-2,1.8-2.3c4-0.9,7.1,1,8.1,5c1.6,6.5-2.5,13.3-9,14.9c-0.9,0.2-1.1-0.2-1.1-0.9
                                        c0-2.7,0-5.5,0-8.2c0,0,0.1,0,0.1,0C551.5,364.7,551.5,361.9,551.5,359L551.5,359z M548.3,400.4c1.4,0.1,2.5-1.1,2.6-3
                                        c0.1-1.4,0-2.7,0-4.1c0.1,0,0.1,0,0.2,0c0-2.5,0-5,0-7.4c0.1-3.6,1.3-4.8,4.9-4.9c4-0.1,6.9,2,7.9,5.9c0.2,0.8,0.2,1.7,0.3,2.6
                                        c0.5,3.3,1.3,6.6,3.6,9.2c3,3.6,8.5,4.1,11.5,1.2c0.8-0.7,1.4-1.5,0.9-2.6c-0.5-1-1.4-1.4-2.4-1.5c-0.8-0.1-1.4,0.3-2.1,0.6
                                        c-3,1.4-4.5,0.8-5.6-2.3c-0.8-2.3-1.5-4.7-2.1-7.1c-0.9-3.6-2.5-6.8-5.8-8.7c-1.1-0.6-1-1.2-0.3-2c3.8-4.3,5-9.2,3.6-14.8
                                        c-0.9-3.9-3.2-6.6-6.9-8.3c-3.1-1.4-6.3-0.8-9.4-0.5c-1.5,0.2-1.5,1.2-1.7,2.4c-0.6,4.7,0,9.4-0.2,14.1
                                        c-0.5,9.3,0.1,18.6-1.7,27.8C545.3,398.5,546.9,400.4,548.3,400.4L548.3,400.4z"/>
                                    <path className="start" d="M513,376.9c1.7-5.3,3.3-10.6,5-15.9c0.1-0.2,0.3-0.5,0.4-0.5c0.4-0.1,0.6,0.3,0.7,0.7
                                        c2.1,5.1,3.6,10.5,5,15.8c0.4,1.5-0.3,1.7-1.5,1.7c-2.9-0.6-5.7-0.5-8.5-0.6C513.3,378.1,512.6,378,513,376.9L513,376.9z
                                        M503.4,401.1c1.3,0,1.5-0.9,1.8-1.9c1-3.3,2.1-6.6,3.2-9.9c0.6-1.8,1.2-3.5,1.9-5.2c0.3-0.8,0.9-1.4,1.9-1.5
                                        c3.9-0.5,7.7-0.4,11.5,0.3c1.8,0.3,2.9,1.3,3,3.2c0.1,4.1,2.7,7.7,2.6,11.9c0,0.3,0.2,0.7,0.4,1c0.8,1.6,2.2,2.3,3.6,1.7
                                        c1.3-0.5,2-2.2,1.2-3.8c-2.5-5-3.6-10.6-5.1-15.9c-2.4-8.7-6-17.1-7.4-26.1c-0.4-2.3-1.4-2.9-3.9-3c-1.4-0.2-2.2,0.3-2.6,1.9
                                        c-1.7,7.8-4.3,15.3-7,22.7c-2.4,6.7-4.9,13.2-7.4,19.9c-0.2,0.6-0.4,1.2-0.5,1.8C500.5,399.5,502,401.1,503.4,401.1L503.4,401.1z"
                                        />
                                    <path className="start" d="M452.6,374.8c-1.5-0.8-3.1-1.5-4.7-2.3c-3.4-1.6-5.1-4.6-6-8.1c-0.2-0.6-0.3-1.3,0.1-1.8
                                        c1.7-2.1,3.3-4.4,6.4-4.6c2.5-0.2,4.9-0.2,7.2,1.1c1.6,0.9,2.7,0.4,3.1-0.7c0.5-1.3-0.2-2.6-1.6-3.3c-0.3-0.2-0.7-0.2-1.1-0.3
                                        c-2.1-0.7-4.3-1.3-6.6-1.1c-2.1-0.3-4.2-0.1-6,1.3c-1.3,1.1-2.6,2.3-3.8,3.5c-1.4,1.3-1.8,2.9-1.9,4.7c-0.1,3.2,1.4,5.7,3,8.2
                                        c2.4,3.6,6.1,5.5,9.9,7c4.5,1.7,5.7,9.1,3.1,12.8c-2.4,3.5-5.9,4.8-9.9,5c-1.2,0.1-2.2-0.3-3-1.1c-1.5-1.5-3.2-2.7-4.1-4.7
                                        c-0.2-0.4-0.5-0.9-0.8-1.2c-1.1-1.1-2.3-1.3-3.3-0.4c-1.2,0.9-0.8,2.1-0.1,3c2,2.5,4.5,4.6,7,6.7c2.4,2,5,2.5,8,2
                                        c2.2-0.4,4.2-1.1,6.1-2.4C462,392.3,461.5,379.7,452.6,374.8L452.6,374.8z"/>
                                    <path className="start" d="M579.7,357.6c3.2-0.5,6.4,0.1,9.6,0.2c1,0,1.6,0.5,1.6,1.5c0,0.7,0,1.5,0,2.2c0,6,0.2,11.9,0,17.9
                                        c-0.1,4.6,0.9,9.1,0.4,13.7c-0.2,2.2-0.3,4.4-0.5,6.7c-0.1,1.2,0.2,2.2,0.9,3.1c0.7,0.8,1.4,1.5,2.5,1.3c1.3-0.3,1.7-1.3,1.7-2.6
                                        c0-0.9,0-1.7-0.1-2.6c-0.2-6.2-0.5-12.4-0.7-17.3c0-8.1,0-14.9,0-21.8c0-2.2,0.2-2.3,2.4-2.3c2.6,0.1,5.2,0.2,7.8,0.3
                                        c1.1,0,2.3,0,2.7-1.4c0.3-1.4-0.1-2.4-1.3-3.2c-1-0.7-2.1-0.7-3.2-0.4c-1.8,0.5-3.7,0.6-5.6,0.4c-2.6-0.3-5.2-0.2-7.8-0.1
                                        c-1.5,0.1-3,0-4.5-0.2c-2.5-0.3-5-0.2-7.4-0.1c-0.8,0-1.5,0.2-1.8,1.1C576.2,355.9,577.8,357.9,579.7,357.6L579.7,357.6z"/>
                                    <path className="start" d="M491.6,352.8c-3.2,0.1-6.4,0-9.7,0c-3.5,0.1-6.9,0.2-10.4-0.2c-1.2-0.1-1.9,0.3-2.2,1.5
                                        c-0.3,1.1,0.2,2,1.1,2.5c0.6,0.4,1.4,0.5,2.1,0.5c1.9,0.1,3.7,0.2,5.6,0.2c2.8,0,3,0,2.9,2.9c-0.2,6.4-0.6,12.9-0.6,19.3
                                        c-0.1,5.6-0.5,11.1-0.7,16.7c-0.1,1.5,0,3,1.1,4.2c0.7,0.7,1.5,1.4,2.6,0.9c1-0.5,0.8-1.3,0.8-2.2c0.1-6.8-0.4-13.6,0.3-20.4
                                        c0.2-2,0.2-4,0-5.9c-0.3-4.5,0.3-8.9,0.3-13.3c0-1.3,0.6-1.7,1.8-1.7c2.3,0,4.7-0.1,7,0c1,0.1,1.7,0.2,2.2-0.8
                                        c0.4-0.9,0.2-1.7-0.3-2.5C494.6,353,493.2,352.8,491.6,352.8L491.6,352.8z"/>
                                </g>
                            </g></a>

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

