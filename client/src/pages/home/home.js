import React, { Component } from "react";
import {Input} from "../../components/input"
import "./home.css"
class Home extends Component {

    render() {
        return (
            <div className="wrapper">
               
                <img src= "./img/home.jpg"></img>
                    


                <div className="homeDiv">
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
                    <div className = "loginDiv">
                        <Input 
                            label = "User name:"
                        />
                        <Input
                            label= "Password"
                        />
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Home;

