import React, { Component } from "react";
import {Input} from "../../components/input"
import {Submit} from "../../components/submitBtn"
import {HomeHeader} from "../../components/homeHeader"
import {Modal, Btn} from "../../components/Modal"
import API from "../../utils/API";
import "./signUp.css"

class Signup extends Component {
    state = {
        signUpUser: "",
        signUpEmail: "",
        signUpPass: "",
        signUpPass2: "",
        signUpFirst: "",
        signUpLast: "",
        alert: "",
        alerttype: "normal",

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    validateEmail = email => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)){
            return true;
        } else{
            this.setState({alert: "Please enter a valid email"});
            return false;
        }
    }
    validatePassword = password =>{
        //should contain at least 1 digit
        //one lowercase
        //one uppercase
        //6 characters
        let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        if  (re.test(password)){
            return true;
        }else{
            this.setState({alert: "Password must be at least 6 characters and include lowercase, uppercase and number"});
            return false;
        }
    }


    confirmPassword = (pass1,pass2) => {
        if(pass1 === pass2){
            return true;
        }else{
            this.setState({alert: "Passwords don't match"});
            return false;}
    }

    validateSignUp = userInfo =>{
        console.log("hello")
        if(this.validateEmail(userInfo.email) && userInfo.firstName && this.validatePassword(userInfo.password) && this.confirmPassword(userInfo.password2, userInfo.password)){
            API.checkUser(userInfo.username).then((result)=>{
                if (result.data.exists){
                    this.setState({alert: "This username is already taken"});
                    return false;
                }else{
                    console.log("can sign up")
                    API.signUp(userInfo).then(result =>{
                        console.log(result)
                        this.setState({alert: "Username Successfully created"})
                        console.log(result.data)
                        window.location.href= "/"
                    })
                }
            })
        }
    }

    handleSignUp = event =>{
        this.setState({alert: ""})
        event.preventDefault();
        const userInfo={
            firstName: this.state.signUpFirst,
            lastName: this.state.signUpLast,
            email: this.state.signUpEmail,
            username: this.state.signUpUser,
            password: this.state.signUpPass,
            password2: this.state.signUpPass2,
        }
        if(!userInfo.firstName || !userInfo.email || !userInfo.username|| !userInfo.password || !userInfo.password2){
            this.setState({alert: "Please fill the required fields"})
        }else{ 
            this.validateSignUp(userInfo)
        }

    }

    render() {
        return (
            <div className="signup-container">
                <div id="signup-content">
                    <HomeHeader isSignup={true}/>
                    <div className="row signup-row">
                    <div className="col-md-2"></div>
                    <div id="signup-blurb" className="col-md-4">
                        <h1>We'll help you find the right place, the fun way!</h1>
                        <p>Use where2eat to save your favorite places you want to hang out at, connect to your friends and invite them to dine out together!</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="signupCol col-md-3">
                        <form>
                            <p id="alert">{this.state.alert}</p>
                            <Input
                                name= "signUpFirst"
                                value = {this.state.signUpFirst}
                                onChange = {this.handleInputChange}
                                label = "First Name:"
                            />
                            <Input
                                name= "signUpLast"
                                value = {this.state.signUpLast}
                                onChange = {this.handleInputChange}
                                label = "Last Name:"
                            />
                            <Input
                                name= "signUpUser"
                                value = {this.state.signUpUser}
                                onChange = {this.handleInputChange}
                                label = "Pick a Username:"
                            />
                            <Input
                                name= "signUpEmail"
                                value = {this.state.signUpEmail}
                                onChange = {this.handleInputChange}
                                label = "Email Address:"
                            />
                            <Input
                                type= "password"
                                name= "signUpPass"
                                value = {this.state.signUpPass}
                                onChange = {this.handleInputChange}
                                label = "Choose Password"
                            />
                            <Input
                                type= "password"
                                name= "signUpPass2"
                                value = {this.state.signUpPass2}
                                onChange = {this.handleInputChange}
                                label = "Repeat Password"
                            />
                            <Submit
                                type="submit"
                                onClick={this.handleSignUp}
                            />
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="footer">
                    <img id="bg-img" src="./img/bg-2.png"/>
                </div>
                
            </div>
                
        )
    }

}

export default Signup;

